import UserInfo from "./UserInfo";

const HomeHeader = () => {
  return (
    <header>
      <UserInfo />
      <div className="menubar">
        <div className="searchVessel">선박 검색</div>
        <div>선박 등록</div>
        <div>My 선박</div>
        <div className="logout">로그 아웃</div>
      </div>
    </header>
  );
};

export default HomeHeader;
