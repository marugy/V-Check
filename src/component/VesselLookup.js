import { useState } from "react";

import VesselList from "./VesselList";

const VesselLookup = () => {
  const [vesselData, setVesselData] = useState({});
  const [searchInfo, setsearchInfo] = useState({
    imo: "",
    name: "",
    type: "",
    ton: "",
  });

  const handleChangeSearch = (e) => {
    setsearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetch(
      `http://34.64.185.37:8080/v2/vessel/list?imo=${searchInfo.imo}&vesselName=${searchInfo.name}&vesselType=${searchInfo.type}&ton=${searchInfo.ton}`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setVesselData(result);
      });
  };

  return (
    <div className="VesselLookup">
      <div className="Lookup">
        <h2>서비스에 등록되어 있는 선박 조회</h2>
        검색하실 IMO 입력하세요 :{" "}
        <input
          type={"text"}
          name="imo"
          value={searchInfo.imo}
          onChange={handleChangeSearch}
          placeholder={"1234567"}
        />
        <br />
        검색하실 선박 명을 입력하세요 :{" "}
        <input
          type={"text"}
          name="name"
          value={searchInfo.name}
          onChange={handleChangeSearch}
          placeholder={"XX선박"}
        />
        <br />
        검색하실 선박 타입을 입력하세요 :{" "}
        <input
          type={"text"}
          name="type"
          value={searchInfo.type}
          onChange={handleChangeSearch}
          placeholder={"A,B,C"}
        />
        <br />
        검색하실 선박 무게를 입력하세요 :
        <input
          type={"text"}
          name="ton"
          value={searchInfo.ton}
          onChange={handleChangeSearch}
          placeholder={"총 톤 수"}
        />
        <button onClick={handleSubmit}>검색</button>
      </div>
      <VesselList vesselList={vesselData.vesselInfoList} btnType="enroll" />
    </div>
  );
};

export default VesselLookup;
