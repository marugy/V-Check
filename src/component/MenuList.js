const MenuList = ({ job }) => {
  const menulist = () => {
    if (job === "검사관") {
      return ["선박 조회", "My 선박", "선박 등록"];
    } else {
      return ["선박 조회", "My 선박"];
    }
  };
  const menu = menulist();
  const logoutimg = "./assets/logout.png";
  return (
    <div className="MenuList">
      <div className="vesselSearch">{menu[0]}</div>
      <div className="myVessel">{menu[1]}</div>
      <div className="vesselEnroll">{menu[2]}</div>
      <div className="logout">
        <img src={logoutimg} alt="" />
        로그아웃
      </div>
    </div>
  );
};

export default MenuList;
