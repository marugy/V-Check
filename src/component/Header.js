import UserInfo from "./UserInfo";
import MenuList from "./MenuList";

const userdummy = {
  name: "홍길동",
  belong: "행복선박",
  job: "제조업체",
  email: "홍길동@네이버.com",
};

const Header = () => {
  return (
    <div className="Header">
      <UserInfo userdata={userdummy} />
      <MenuList job={userdummy.job} />
    </div>
  );
};

export default Header;
