import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VesselItem = ({
  imo,
  vesselName,
  vesselType,
  ownership,
  ton,
  startDate,
  endDate,
  btnType,
}) => {
  const navigate = useNavigate();
  const [own, setOwn] = useState(ownership);

  const vesselTypeList = {
    General: "일반 화물선",
    Container: "컨테이너선",
    CrudeOil: "원유 운반선",
    Ore: "광석 전용선",
    Refrigerated: "냉동선",
  };

  const handleSubmit = () => {
    fetch("http://34.64.185.37:8080/v2/vessel/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ imo: String(imo) }),
    }).then(setOwn(true));
  };

  const handledetail = () => {
    navigate(`/usermain/myvessel/${imo}`, {
      state: {
        imo: imo,
        vesselName: vesselName,
        vesselType: vesselTypeList[vesselType],
        ton: ton,
        startDate: startDate,
        endDate: endDate,
      },
    });
  };

  let button;
  if (btnType === "enroll") {
    if (own == false)
      button = <button onClick={handleSubmit}>선박 추가</button>;
    else if (own)
      button = (
        <button className="imposBtn" onClick={handleSubmit} disabled>
          등록 완료
        </button>
      );
  } else if (btnType === "detail") {
    button = <button onClick={handledetail}>상세보기</button>;
  }

  return (
    <div className="VesselItem">
      <div className="vesselInfo">
        <div className="name_imo">
          {vesselName}
          <br />
          IMO : {imo}
        </div>
        <br />
        <div className="">
          {vesselTypeList[vesselType]}
          <br />
          {ton}t
        </div>
        <div className="dayInfo">
          착공일 : {startDate}
          <br />
          준공일 : {endDate}
        </div>
        <div>{button}</div>
      </div>
    </div>
  );
};

export default VesselItem;
