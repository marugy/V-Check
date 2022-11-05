import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VesselItem = ({
  imo,
  vesselName,
  vesselType,
  ownership,
  ton,
  btnType,
}) => {
  const navigate = useNavigate();
  const [own, setOwn] = useState(ownership);

  const handleSubmit = () => {
    if (own === true) {
      alert("이미 등록된 선박입니다.");
    } else {
      fetch("http://34.64.185.37:8080/v2/vessel/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("access_token"),
        },
        body: JSON.stringify({ imo: String(imo) }),
      }).then(setOwn(true));
    }
  };

  const handledetail = () => {
    navigate("/usermain/myvessel/vesseldetail", {
      state: { imo: imo, vesselName: vesselName, vesselType: vesselType },
    });
  };

  let button;
  if (btnType === "enroll") {
    button = <button onClick={handleSubmit}>선박 추가</button>;
  } else if (btnType === "detail") {
    button = <button onClick={handledetail}>상세보기</button>;
  }

  return (
    <div className="VesselItem">
      <div className="vesselInfo">
        선박 imo : {imo}
        <br />
        선박 이름 : {vesselName}
        <br />
        선박 타입 : {vesselType}
        <br />
        소유여부 : {String(own)}
        <br />총 톤 수 : {ton}
      </div>
      {button}
    </div>
  );
};

export default VesselItem;
