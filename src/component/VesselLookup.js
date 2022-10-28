import { useEffect, useState } from "react";

import VesselList from "./VesselList";

const VesselLookup = () => {
  const [vesselData, setVesselData] = useState([]);
  const [searchInfo, setsearchInfo] = useState({
    imo: "",
    name: "",
    type: "",
  });

  const handleChangeSearch = (e) => {
    setsearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetch(
      "http://34.64.185.37:8080/v1/vessel/list?imo=" +
        searchInfo.imo +
        "vessel_name=" +
        encodeURI(searchInfo.name, "UTF-8") +
        "&vessel_type=" +
        searchInfo.type,
      {
        method: "GET",
        header: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setVesselData(result);
        localStorage.setItem("vs", "야호");
      });
  };

  return (
    <div className="VesselLookup">
      <h2>서비스에 등록되어 있는 선박 조회</h2>
      <h4>{vesselData.length}개의 선박이 있습니다.</h4>
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
      <button onClick={handleSubmit}>검색</button>
      <VesselList vesselList={[vesselData]} />
    </div>
  );
};

export default VesselLookup;
