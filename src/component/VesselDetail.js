import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BlockEnroll from "./BlockEnroll";
import BlockList from "./BlockList";

const VesselDetail = () => {
  const { state } = useLocation();
  const [blockList, setBlockList] = useState({});
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  const blockAdd = () => {
    setEnrollModalOpen(true);
  };

  const [searchInfo, setsearchInfo] = useState({
    blockName: "",
    workingStep: "",
  });

  const selectList = [
    { id: 0, type: "", name: "모두" },
    { id: 1, type: "PieceAssembly", name: "소조립" },
    { id: 2, type: "SubBlockAssembly", name: "중조립" },
    { id: 3, type: "BlockAssembly", name: "대조립" },
    { id: 4, type: "INSTALL", name: "선행 의장" },
  ];

  const handleChangeSearch = (e) => {
    setsearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetch(
      `http://34.64.185.37:8080/v2/block/list?imo=${state.imo}&blockName=${searchInfo.blockName}&workingStep=${searchInfo.workingStep}`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setBlockList(result);
      });
  };

  const buttonOn = () => {
    if (localStorage.getItem("clientType") == "INSPECTOR")
      return <button onClick={handleSubmit}>검색</button>;
    else return;
  };

  const blockenrollbtn = buttonOn();
  return (
    <div className="VesselDetail">
      <div className="vesselInfo">
        <h2>현재 선박 정보</h2>
        IMO : {state.imo}
        <br />
        이름 : {state.vesselName}
        <br />
        타입 : {state.vesselType}
        <br />총 톤 수 : {state.ton}t
        <br />
        착공일 : {state.startDate}
        <br />
        준공일 : {state.endDate}
      </div>

      <div className="Lookup_wrapper">
        <div className="Lookup">
          <h2>선박에 등록되어 있는 블럭 조회</h2>
          <div className="search_wrapper">
            <div>
              블럭 명
              <input
                type={"text"}
                name="blockName"
                value={searchInfo.blockName}
                onChange={handleChangeSearch}
                placeholder={"XX블럭"}
              />
            </div>
            <div>
              작업단계
              <br />
              <select
                onChange={handleChangeSearch}
                value={searchInfo.workingStep}
                name="workingStep"
              >
                {selectList.map((item) => (
                  <option value={item.type} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={handleSubmit}>검색</button>
            </div>
          </div>
        </div>
        {blockenrollbtn}
        <BlockList
          blockList={blockList.blockInfoList}
          btnType="detail"
          state={state}
        />
      </div>

      {enrollModalOpen && (
        <BlockEnroll setEnrollModalOpen={setEnrollModalOpen} imo={state.imo} />
      )}
    </div>
  );
};

export default VesselDetail;
