import { Link } from "react-router-dom";
import { REST_API_KEY, LOGOUT_REDIRECT_URI } from "../page/Kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

const handleLogout = () => {
  window.location.href = KAKAO_AUTH_URL;
  localStorage.clear();
};

const MenuList = ({ clientType }) => {
  const menulist = () => {
    if (clientType === "INSPECTOR") {
      return (
        <div className="MenuList">
          <Link to={"/usermain/vesselenroll"} className="vesselEnroll">
            {
              <div className="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/description.png`}
                  alt="선박 조회"
                />
                선박 등록
              </div>
            }
          </Link>
          <Link to={"/usermain/vessellookup"} className="vesselLookup">
            {
              <div className="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/search.png`}
                  alt="선박 조회"
                />
                선박 조회
              </div>
            }
          </Link>
          <Link to={"/usermain/myvessel"} className="myVessel">
            {
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/vessel.png`}
                  alt="내선박"
                />
                My 선박
              </div>
            }
          </Link>
        </div>
      );
    } else {
      return (
        <div className="MenuList">
          <Link to={"/usermain/vessellookup"} className="vesselLookup">
            {
              <div className="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/search.png`}
                  alt="선박 조회"
                />
                선박 조회
              </div>
            }
          </Link>
          <Link to={"/usermain/myvessel"} className="myVessel">
            {
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/vessel.png`}
                  alt="내선박"
                />
                My 선박
              </div>
            }
          </Link>
        </div>
      );
    }
  };
  const menuList = menulist();

  return (
    <div className="MenuList">
      {menuList}
      <div className="logout">
        <button onClick={handleLogout}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/Logout.png`}
            alt="로그아웃"
          />
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default MenuList;
