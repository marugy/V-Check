import UserInfo from "./UserInfo";
import MenuList from "./MenuList";

const Header = ({ userdata }) => {
  return (
    <div className="Header">
      <UserInfo userdata={userdata} />
      <MenuList client_type={userdata.client_type} />
    </div>
  );
};

export default Header;
