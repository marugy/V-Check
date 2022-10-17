const UserInfo = ({ userdata }) => {
  const imgA = "./assets/person.png";

  return (
    <div className="UserInfo">
      <div className="user_img">
        <img src={imgA} alt="사용자 이미지" />
      </div>
      <div className="user_data">
        <div>이름 : {userdata.name}</div>
        <div>소속 : {userdata.belong}</div>
        <div>직책 : {userdata.job}</div>
        <div>이메일 : {userdata.email}</div>
      </div>
    </div>
  );
};

export default UserInfo;
