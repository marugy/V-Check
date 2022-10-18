import React from "react";

const Loading = () => {
  const params = new URL(window.location.href).searchParams;
  const code = params.get("code");
  console.log(code);

  fetch("http://34.64.185.37:8080/v1/get_token ", {
    method: "POST",
    body: JSON.stringify({
      code: code,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.token) {
        localStorage.setItem("token", response.token);
        this.props.history.push("/usermain");
      } else {
        alert("Error");
      }
    });

  return (
    <div>
      사용자 정보 확인중입니다.
      <br />
      잠시만 기다려주세요
    </div>
  );
};

export default Loading;
