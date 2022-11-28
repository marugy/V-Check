import { useState } from "react";
import { useNavigate } from "react-router-dom";
import spinner from "../spinner/spinner.gif";

const Loading = () => {
  const navigate = useNavigate();
  const params = new URL(window.location.href).searchParams;
  const code = params.get("code");

  useState(() => {
    fetch("http://34.64.185.37:8080/v2/get_token", {
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
          if (response.is_our_client) {
            navigate("/usermain/vessellookup");
          } else {
            localStorage.setItem("userName", response.name);
            localStorage.setItem("userEmail", response.email);
            navigate("/signup");
          }
        } else {
          navigate("/");
        }
      });
  });
  return (
    <div className="Loading">
      <img src={spinner} alt="로딩중" width="5%" />
      <br />
      <div>*Loading*</div>
    </div>
  );
};
export default Loading;
