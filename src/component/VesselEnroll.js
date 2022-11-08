import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VesselEnroll = () => {
  const navigate = useNavigate();
  const [enrollInfo, setEnrollInfo] = useState({
    imo: "",
    vessel_name: "",
    vessel_type: "General",
    ton: "",
    startDate: "",
    endDate: "",
  });

  const selectList = [
    "General",
    "Container",
    "CrudeOil",
    "Ore",
    "Refrigerated",
  ];

  const handleChangeInfo = (e) => {
    setEnrollInfo({
      ...enrollInfo,
      [e.target.name]: e.target.value,
    });
  };

  const checkEnroll = (e) => {
    fetch("http://34.64.185.37:8080/v2/vessel/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        imo: enrollInfo.imo,
        vesselName: enrollInfo.vessel_name,
        vesselType: enrollInfo.vessel_type,
        ton: Number(enrollInfo.ton),
        startDate: enrollInfo.startDate,
        endDate: enrollInfo.endDate,
      }),
    })
      .then((response) => response.json)
      .then((result) => {
        navigate("/vesselenroll");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="VesselEnroll">
      <div className="vessel_wrapper">
        <h2>서비스에 등록할 선박 정보를 입력하세요</h2>
        <form>
          IMO :{" "}
          <input
            type={"text"}
            placeholder="숫자로 이루어진 IMO를 입력해주세요"
            name="imo"
            onChange={handleChangeInfo}
          />
          <br />
          선박 이름 :{" "}
          <input
            type={"text"}
            name="name"
            placeholder="XX선박"
            onChange={handleChangeInfo}
          />
          <br />총 톤 수 :{" "}
          <input
            type={"text"}
            name="ton"
            placeholder="톤 단위로 입력하세요"
            onChange={handleChangeInfo}
          />
          <br />
          착공 예정일 :{" "}
          <input
            type={"text"}
            name="startDate"
            placeholder="yyyy-mm-dd"
            onChange={handleChangeInfo}
          />
          <br />
          준공 예정일 :{" "}
          <input
            type={"text"}
            name="endDate"
            placeholder="yyyy-mm-dd"
            onChange={handleChangeInfo}
          />
          <br />
          선박 종류 :{" "}
          <select
            onChange={handleChangeInfo}
            value={enrollInfo.type}
            name="type"
          >
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <button onClick={checkEnroll}>선박 등록</button>
        </form>
      </div>
    </div>
  );
};

export default VesselEnroll;
