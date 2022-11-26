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
    sequenceNumber: "",
    workingStatus: "",
    blockName: "",
  });

  const falutTypeSelectList = [
    { id: 0, type: "", name: "모두" },
    { id: 1, type: "GOOD", name: "정상" },
    { id: 2, type: "FAULT_TYPE_201", name: "가공불량" },
    { id: 3, type: "FAULT_TYPE_202", name: "단차" },
    { id: 4, type: "FAULT_TYPE_203", name: "덕트 손상" },
    { id: 5, type: "FAULT_TYPE_205", name: "바인딩 불량" },
    { id: 6, type: "FAULT_TYPE_206", name: "보강재 설치 불량" },
    { id: 7, type: "FAULT_TYPE_207", name: "보온재 손상" },
    { id: 8, type: "FAULT_TYPE_208", name: "설치 불량" },
    { id: 9, type: "FAULT_TYPE_209", name: "연결 불량" },
    { id: 10, type: "FAULT_TYPE_210", name: "연계 처리 불량" },
    { id: 11, type: "FAULT_TYPE_211", name: "케이블 손상" },
    { id: 12, type: "FAULT_TYPE_212", name: "테이프 불량" },
    { id: 13, type: "FAULT_TYPE_213", name: "함석 처리 불량" },
    { id: 14, type: "FAULT_TYPE_401", name: "볼트 체결 불량" },
    { id: 15, type: "FAULT_TYPE_402", name: "파이프 손상" },
  ];

  const workingStatusSelectList = [
    { id: 0, type: "", name: "모두" },
    { id: 1, type: "WorkingStart", name: "재작업 시작" },
    { id: 2, type: "WorkingIng", name: "작업 중" },
    { id: 3, type: "WorkingComplete", name: "작업 완료" },
    { id: 4, type: "InspectionComplete", name: "검사 완료" },
  ];

  const workingStatusList = {
    PieceAssembly: "소조립",
    SubBlockAssembly: "중조립",
    BlockAssembly: "대조립",
    INSTALL: "선행 의장",
  };

  const handleChangeSearch = (e) => {
    setsearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetch(
      `http://34.64.185.37:8080/v2/vessel/${state.state.imo}/component/list?faultType=${searchInfo.faultType}&componentName=${searchInfo.componentName}&
    sequenceNumber=${searchInfo.sequenceNumber}&workingStatus=${searchInfo.workingStatus}&blockName=${searchInfo.blockName}`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setComponentList(result);
      });
  };

  const buttonOn = () => {
    if (localStorage.getItem("clientType") == "INSPECTOR")
      return <button onClick={componentAdd}>부품 업로드</button>;
    else return;
  };

  const componentEnrollBtn = buttonOn();

  return (
    <div className="BlockDetail">
      <div className="info_wrapper">
        <div className="vesselInfo">
          <h2>현재 선박 정보</h2>
          IMO : {state.state.imo}
          <br />
          이름 : {state.state.vesselName}
          <br />
          타입 : {state.state.vesselType}
          <br />총 톤 수 : {state.state.ton}t
          <br />
          착공일 : {state.state.startDate}
          <br />
          준공일 : {state.state.endDate}
        </div>
        <div className="blockInfo">
          <h2>블럭 정보</h2>
          이름 : {state.blockName}
          <br />
          작업단계 : {workingStatusList[state.workingStep]}
        </div>
      </div>
      <div className="component_wrapper">
        <div className="search_wrapper">
          <h2>블록에 업로드되어 있는 부품 조회</h2>
          <div className="search">
            <div>
              부품명
              <input
                type={"text"}
                name="componentName"
                value={searchInfo.componentName}
                onChange={handleChangeSearch}
                placeholder={"덕트, 파이프 등등.."}
              />
            </div>
            <div>
              일련 번호
              <input
                type={"text"}
                name="sequenceNumber"
                value={searchInfo.sequenceNumber}
                onChange={handleChangeSearch}
                placeholder={"1234.."}
              />
            </div>
            <div>
              작업 상태
              <br />
              <select
                onChange={handleChangeSearch}
                value={searchInfo.workingStatus}
                name="workingStatus"
              >
                {workingStatusSelectList.map((item) => (
                  <option value={item.type} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              불량 상태
              <select
                onChange={handleChangeSearch}
                value={searchInfo.faultType}
                name="faultType"
              >
                {falutTypeSelectList.map((item) => (
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
        <div className="btn">{componentEnrollBtn}</div>

        <div className="componentList">
          <ComponentList
            componentList={componentList.componentInfoList}
            imo={state.state.imo}
          />
        </div>
        <br />
        {enrollModalOpen && (
          <ComponentEnroll
            setEnrollModalOpen={setEnrollModalOpen}
            block_name={state.blockName}
          />
        )}
      </div>
    </div>
  );
};

export default BlockDetail;
