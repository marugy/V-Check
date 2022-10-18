const SignUp = () => {
  return (
    <div className="SignUp">
      <div className="signup_wrapper">
        <h2>회원 가입</h2>
        <form>
          이름 <input type={"text"} placeholder="" />
          <br />
          이메일 <input type={"text"} />
          <br />
          소속 <input type={"text"} />
          <br />
          직책 <input type={"text"} />
          <br />
          <button type="submit">회원 가입</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
