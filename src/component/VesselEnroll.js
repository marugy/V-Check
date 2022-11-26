import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const VesselEnroll = () => {
  const inputRef = useRef();
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
    { id: 0, type: "General", name: "일반 화물선" },
    { id: 1, type: "Container", name: "컨테이너선" },
    { id: 2, type: "CrudeOil", name: "원유 운반선" },
    { id: 3, type: "Ore", name: "광석 전용선" },
    { id: 4, type: "Refrigerated", name: "냉동선" },
  ];

  const handleChangeInfo = (e) => {
    setEnrollInfo({
      ...enrollInfo,
      [e.target.name]: e.target.value,
    });
  };

  const checkEnroll = () => {
    alert(
      enrollInfo.imo +
        enrollInfo.vessel_name +
        enrollInfo.vessel_type +
        enrollInfo.ton +
        enrollInfo.startDate +
        enrollInfo.endDate
    );

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
      .then((response) => response.json())
      .then((result) => {
        navigate("/usermain//vesselenroll/");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="VesselEnroll">
      <div className="vessel_wrapper">
        <h2>
          서비스에 등록할
          <br />
          선박 정보를 입력하세요
        </h2>
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
            name="vessel_name"
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
          선박 종류 : <br />
          <select
            onChange={handleChangeInfo}
            value={enrollInfo.type}
            name="vessel_type"
          >
            {selectList.map((item) => (
              <option value={item.type} key={item.id}>
                {item.name}
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
