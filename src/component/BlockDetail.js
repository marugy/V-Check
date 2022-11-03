import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ComponentList from "./ComponentList";
import ComponentEnroll from "./ComponentEnroll";

const BlockDetail = () => {
  const { state } = useLocation();
  const [componentList, setComponentList] = useState({});
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://34.64.185.37:8080/v1/vessel/${state.imo}/component/list?`, {
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
  }, []);

  const componentAdd = () => {
    setEnrollModalOpen(true);
  };

  return (
    <div className="BlockDetail">
      <div className="vesselInfo">
        선박 IMO : {state.state.imo}
        <br />
        선박 이름 : {state.state.vesselName}
        <br />
        선박 타입 : {state.state.vesselType}
        <hr />
        블럭 이름 : {state.blockName}
        <br />
        블럭 작업단계 : {state.workingStep}
        <hr />
      </div>
      <div className="componentList">
        <ComponentList componentList={componentList.componentInfoList} />
      </div>
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
