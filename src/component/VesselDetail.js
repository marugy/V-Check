import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BlockEnroll from "./BlockEnroll";
import BlockList from "./BlockList";

const VesselDetail = () => {
  const { state } = useLocation();
  const [blockList, setBlockList] = useState({});
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://34.64.185.37:8080/v1/block/list?working_step=ASSEMBLY`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setBlockList(result);
      });
  }, []);

  const blockAdd = () => {
    setEnrollModalOpen(true);
  };

  return (
    <div className="VesselDetail">
      <div className="vesselInfo">
        선박 IMO : {state.imo}
        <br />
        선박 이름 : {state.vesselName}
        <br />
        선박 타입 : {state.vesselType}
        <hr />
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
