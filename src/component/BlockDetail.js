import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ComponentList from "./ComponentList";
import ComponentEnroll from "./ComponentEnroll";

const BlockDetail = () => {
  const { state } = useLocation();
  const [componentList, setComponentList] = useState({});
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  const componentAdd = () => {
    setEnrollModalOpen(true);
  };


  const [searchInfo, setsearchInfo] = useState({
    faultType: "",
    componentName: "",
    sequenceNumber:"",
    workingStatus:"",
    blockName:"",
  });

  const falutTypeSelectList = [
    "",
    "GOOD",
    "FAULT_TYPE_201",
    "FAULT_TYPE_202",
    "FAULT_TYPE_203",
    "FAULT_TYPE_205",
    "FAULT_TYPE_206",
    "FAULT_TYPE_207",
    "FAULT_TYPE_208",
    "FAULT_TYPE_209",
    "FAULT_TYPE_210",
    "FAULT_TYPE_211",
    "FAULT_TYPE_212",
    "FAULT_TYPE_213",
    "FAULT_TYPE_401",
    "FAULT_TYPE_402",
  ];

  const workingStatusSelectList = [
    "",
    "WorkingStart",
    "WorkingIng",
    "WorkingComplete",
    "InspectionComplete", 
  ];

  const handleChangeSearch = (e) => {
    setsearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetch(`http://34.64.185.37:8080/v2/vessel/${state.state.imo}/component/list?faultType=${searchInfo.faultType}&componentName=${searchInfo.componentName}&
    sequenceNumber=${searchInfo.sequenceNumber}&workingStatus=${searchInfo.workingStatus}&blockName=${searchInfo.blockName}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setComponentList(result);
      });
  };






  return (
    <div className="BlockDetail">
      <div className="vesselInfo">
        <h2>선박 정보</h2>
        선박 IMO : {state.state.imo}
        <br />
        선박 이름 : {state.state.vesselName}
        <br />
        선박 타입 : {state.state.vesselType}
        <br />총 톤 수 : {state.state.ton}
        <br/>착공일 : {state.state.startDate}
        <br/>준공일(준공예정일) : {state.state.endDate}
      </div>
      <div className="blockInfo">
        <h3>블럭 정보</h3>
        블럭 이름 : {state.blockName}
        <br />
        블럭 작업단계 : {state.workingStep}
      </div>



      <div className="Lookup">
        <h2>블록에 업로드되어 있는 부품 조회</h2>
        검색하실 부품명을 입력하세요 :{" "}
        <input
          type={"text"}
          name="componentName"
          value={searchInfo.componentName}
          onChange={handleChangeSearch}
          placeholder={"덕트, 파이프 등등.."}
        />
        <br />
        검색하실 일련 번호를 입력하세요 :{" "}
        <input
          type={"text"}
          name="sequenceNumber"
          value={searchInfo.sequenceNumber}
          onChange={handleChangeSearch}
          placeholder={"1234.."}
        />
        <br />

        작업 상태를 입력하세요 :
        <select
          onChange={handleChangeSearch}
          value={searchInfo.workingStatus}
          name="workingStatus"
        >
          {workingStatusSelectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <br/>
        불량 상태를 입력하세요 :
        <select
          onChange={handleChangeSearch}
          value={searchInfo.faultType}
          name="faultType"
        >
          {falutTypeSelectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>검색</button>
      </div>

      <div className="componentList">
        <ComponentList componentList={componentList.componentInfoList} />
      </div>
      <br />
      <button onClick={componentAdd}>부품 업로드</button>
      {enrollModalOpen && (
        <ComponentEnroll
          setEnrollModalOpen={setEnrollModalOpen}
          block_name={state.blockName}
        />
      )}
    </div>
  );
};

export default BlockDetail;
