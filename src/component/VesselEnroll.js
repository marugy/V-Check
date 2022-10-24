import React, { useEffect, useState } from "react";

const VesselEnroll = () => {
  const [imo, setImo] = useState("");
  const [vessel_name, setVessel_name] = useState("");
  const [vessel_type, setVessel_type] = useState("");
  // const [vessel_owner, setVessel_owner] = useState("");
  // const [vessel_weight, setVessel_weight] = useState("");

  const imoHandler = (e) => {
    setImo(e.target.value);
  };
  const vessel_nameHandler = (e) => {
    setVessel_name(e.target.value);
  };

  const vessel_typeHandler = (e) => {
    setVessel_type(e.target.value);
  };

  // const vessel_ownerHandler = (e) => {
  //   setVessel_owner(e.target.value);
  // };
  // const vessel_weightHandler = (e) => {
  //   setVessel_weight(e.target.value);
  // };

  const checkEnroll = (e) => {
    fetch("http://34.64.185.37:8080/v1/vessel/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        imo: imo,
        vessel_name: vessel_name,
        vessel_type: vessel_type,
      }),
    })
      .then((response) => console.log("response:", response))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="VesselEnroll">
      <div className="vessel_wrapper">
        <h2>
          서비스에 등록할 선박 정보를
          <br /> 입력하세요
        </h2>
        <form>
          IMO :{" "}
          <input
            type={"text"}
            placeholder="5559531"
            name="imo"
            onChange={imoHandler}
          />
          <br />
          선박 이름 :{" "}
          <input
            type={"text"}
            placeholder="행복선박"
            onChange={vessel_nameHandler}
          />
          <br />
          선박 종류 :{" "}
          <input
            type={"text"}
            placeholder="컨테이너선"
            onChange={vessel_typeHandler}
          />
          <br />
          {/* 선박 OWNER : <input type={"text"} placeholder="XX기업" />
          <br />
          총 톤 수 : <input type={"text"} placeholder="3000"/>
          <br /> */}
          <button type="" onClick={checkEnroll}>
            선박 등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default VesselEnroll;
