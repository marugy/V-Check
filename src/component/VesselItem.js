import { useState } from "react";
const VesselItem = ({ imo, vesselName, vesselType, ownership }) => {
  const [own, setOwn] = useState(ownership);

  const handleSubmit = () => {
    fetch("http://34.64.185.37:8080/v1/vessel/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ imo: String(imo) }),
    }).then(setOwn(true));
  };

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
        <br />
        <button onClick={handleSubmit}>선박등록</button>
      </div>
    </div>
  );
};

export default VesselItem;
