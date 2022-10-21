import UserInfo from "./UserInfo";
import MenuList from "./MenuList";

const Header = ({ userdata }) => {
  return (
    <div className="Header">
      <UserInfo userdata={userdata} />
      <MenuList job={userdata.job} />
    </div>
  );
};

export default Header;
