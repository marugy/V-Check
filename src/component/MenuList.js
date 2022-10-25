import { Link } from "react-router-dom";

import { REST_API_KEY, LOGOUT_REDIRECT_URI } from "../page/Kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

const handleLogout = () => {
  window.location.href = KAKAO_AUTH_URL;
  localStorage.clear();
};

const MenuList = ({ client_type }) => {
  const menulist = () => {
    if (client_type === "INSPECTOR") {
      return ["선박 조회", "My 선박", "선박 등록"];
    } else {
      return ["선박 조회", "My 선박"];
    }
  };
  const menu = menulist();

  return (
    <div className="MenuList">
      <Link to={"/usermain/vessellookup"} className="vessellookup">
        {menu[0]}
      </Link>
      <br />
      <Link to={"/usermain/myvessel"} className="myVessel">
        {menu[1]}
      </Link>
      <br />
      <Link to={"/usermain/vesselenroll"} className="vesselEnroll">
        {menu[2]}
      </Link>
      <br />
      <div className="logout">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Logout.png`}
          alt="로그아웃"
        />
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
};

export default MenuList;
