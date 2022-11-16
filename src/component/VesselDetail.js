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
    "",
    "PieceAssembly",
    "SubBlockAssembly",
    "BlockAssembly",
    "INSTALL",
  ];

  const handleChangeSearch = (e) => {
    setsearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetch(`http://34.64.185.37:8080/v2/block/list?imo=${state.imo}&block_name=${searchInfo.blockName}&working_step=${searchInfo.workingStep}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setBlockList(result);
      });
  };

  return (
    <div className="VesselDetail">
      <div className="vesselInfo">
        <h2>현재 선박 정보</h2>
        선박 IMO : {state.imo}
        <br />
        선박 이름 : {state.vesselName}
        <br />
        선박 타입 : {state.vesselType}
        <br />총 톤 수 : {state.ton}
        <br/>착공일 : {state.startDate}
        <br/>준공일(준공예정일) : {state.endDate}
      </div>




      <div className="Lookup">
        <h2>선박에 등록되어 있는 블럭 조회</h2>
        검색하실 블럭 명을 입력하세요 :{" "}
        <input
          type={"text"}
          name="blockName"
          value={searchInfo.blockName}
          onChange={handleChangeSearch}
          placeholder={"XX블럭"}
        />
        <br />
        검색하실 작업단계를 입력하세요 :{" "}
        <select
          onChange={handleChangeSearch}
          value={searchInfo.workingStep}
          name="workingStep"
        >
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>검색</button>
      </div>

      <BlockList
        blockList={blockList.blockInfoList}
        btnType="detail"
        state={state}
      />
      <button onClick={blockAdd}>블럭 추가</button>
      {enrollModalOpen && (
        <BlockEnroll setEnrollModalOpen={setEnrollModalOpen} imo={state.imo} />
      )}
    </div>
  );
};

export default VesselDetail;
