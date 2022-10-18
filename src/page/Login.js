import React from "react";
import "../index.css";

import { REST_API_KEY, REDIRECT_URI } from "./Kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const handleLogin = () => {
  window.location.href = KAKAO_AUTH_URL;
};

const Login = () => {
  return (
    <div className="Login">
      <div className="LoginBox">
        <h2>
          <strong>WelCome! </strong>
          <br />
          <br />
          V-Check에 오신 것을 환영합니다.
          <br />
          <br />
          소셜 로그인 후 이용하세요!
        </h2>
        <div className="login_wrapper">
          <button onClick={handleLogin} className="kakaobtn"></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
