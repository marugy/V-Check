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

  const selectList = [
    { id: 0, type: "", name: "모두" },
    { id: 1, type: "General", name: "일반 화물선" },
    { id: 2, type: "Container", name: "컨테이너선" },
    { id: 3, type: "CrudeOil", name: "원유 운반선" },
    { id: 4, type: "Ore", name: "광석 전용선" },
    { id: 5, type: "Refrigerated", name: "냉동선" },
  ];

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
      <div className="vesselLookup_wrapper">
        <div className="Lookup">
          <h2>서비스에 등록되어 있는 선박 조회</h2>
          <div className="lookup_info">
            <div>
              IMO
              <br />
              <input
                type={"text"}
                name="imo"
                value={searchInfo.imo}
                onChange={handleChangeSearch}
                placeholder={"1234567"}
              />
            </div>
            <div>
              선박 명
              <br />
              <input
                type={"text"}
                name="name"
                value={searchInfo.name}
                onChange={handleChangeSearch}
                placeholder={"XX선박"}
              />
            </div>
            <div>
              선박 무게
              <br />
              <input
                type={"text"}
                name="ton"
                value={searchInfo.ton}
                onChange={handleChangeSearch}
                placeholder={"총 톤 수"}
              />
            </div>
            <div>
              선박 타입
              <br />
              <select
                onChange={handleChangeSearch}
                value={searchInfo.type}
                name="type"
              >
                {selectList.map((item) => (
                  <option value={item.type} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={handleSubmit}>검색</button>
          </div>
        </div>
        <VesselList
          vesselList={vesselData.vesselInfoList}
          btnType="enroll"
          listType="lookUp"
        />
      </div>
    </div>
  );
};

export default VesselLookup;
