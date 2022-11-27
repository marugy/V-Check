import { useNavigate } from "react-router-dom";

const BlockItem = ({ blockName, workingStep, imo, vessel_name, state }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/usermain/myvessel/${imo}}/${blockName}`, {
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
        <div>{blockName}</div>
        <div>{blockStatusList[workingStep]}</div>
        <div>
          <button onClick={handleDetail}>상세보기</button>
        </div>
      </div>
    </div>
  );
};

export default BlockItem;
