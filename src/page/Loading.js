import React from "react";
import { Navigate } from "react-router-dom";

const Loading = () => {
  const params = new URL(window.location.href).searchParams;
  const code = params.get("code");
  console.log(code);

  fetch("/v1/get_token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code: code,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.access_token) {
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("refresh_token", response.refresh_token);
        localStorage.setItem("is_our_client", response.is_our_client);
        localStorage.setItem("user_name", response.name);
        localStorage.setItem("user_email", response.email);
      }
    });

  const isOurClient = localStorage.getItem("is_our_client");

  return (
    <div>
      {isOurClient === "true" ? (
        <Navigate to="/usermain" />
      ) : (
        <Navigate to="/signup" />
      )}
    </div>
  );
};
export default Loading;
