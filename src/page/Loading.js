import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();
  const params = new URL(window.location.href).searchParams;
  const code = params.get("code");

  useState(() => {
    fetch("http://34.64.185.37:8080/v1/get_token", {
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
          if (response.is_our_client) navigate("/usermain");
          else {
            navigate("/signup");
          }
        } else {
          navigate("/");
        }
      });
  });
  return (
    <div className="Loading">
      <div>*회원 여부 확인중*</div>
    </div>
  );
};
export default Loading;
