import UserInfo from "./UserInfo";
import MenuList from "./MenuList";

const Header = ({ userdata }) => {
  return (
    <div className="Header">
      <UserInfo userdata={userdata} />
      <MenuList clientType={userdata.clientType} />
    </div>
  );
};

export default Header;
