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

  const blockStatusList = {
    PieceAssembly: "소조립",
    SubBlockAssembly: "중조립",
    BlockAssembly: "대조립",
    INSTALL: "선행 의장",
  };

  return (
    <div className="BlockItem">
      <div className="BlockInfo">
        이름 : {blockName}
        <br />
        작업단계 : {blockStatusList[workingStep]}
        <br />
        <button onClick={handleDetail}>상세보기</button>
      </div>
    </div>
  );
};

export default BlockItem;
