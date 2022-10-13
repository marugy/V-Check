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
          V-Check에 오신 것을 환영합니다.
        </h2>
        <form>
          <input type="text" placeholder="아이디를 입력하세요"></input>
          <input type="password" placeholder="비밀번호를 입력하세요"></input>
          <input type="submit" value={"로그인"} />
        </form>
        <div class="actions">
          <a href="javascript:void(0)">회원가입</a>
          <a href="javascript:void(0)">아이디 찾기</a>
          <a href="javascript:void(0)">비밀번호 찾기</a>
        </div>
        <button onClick={handleLogin} className="kakaobtn"></button>
      </div>
    </div>
  );
};

export default Login;
