const UserInfo = ({ userdata }) => {
  const clientTypeList = {
    INSPECTOR: "검사관",
    MANUFURER: "제조업자",
  };

  return (
    <div className="UserInfo">
      <div className="sys_name">V-Check</div>
      <div className="user_img">
        <img
          src={`${process.env.PUBLIC_URL}/assets/person.png`}
          alt="사용자 이미지"
        />
      </div>
      <div className="user_data">
        <div>이름: {userdata.name}</div>
        <div>소속: {userdata.belongs}</div>
        <div>직책: {userdata.duty}</div>
        <div>이메일: {userdata.email}</div>
        <div>직업: {clientTypeList[userdata.clientType]}</div>
      </div>
    </div>
  );
};

export default UserInfo;
