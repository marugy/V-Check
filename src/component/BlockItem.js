import { useNavigate } from "react-router-dom";

const BlockItem = ({ blockName, workingStep, imo, vessel_name, state }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate("/usermain/myvessel/vesseldetail/blockdetail", {
      state: {
        imo: imo,
        state: state,
        blockName: blockName,
        workingStep: workingStep,
      },
    });
  };

  return (
    <div className="BlockItem">
      <div className="vesselInfo">
        블럭 이름 : {blockName}
        <br />
        블럭 작업단계 : {workingStep}
        <br />
        <button onClick={handleDetail}>상세보기</button>
      </div>
    </div>
  );
};

export default BlockItem;
