import { useState } from "react";
import BlockItem from "./BlockItem";
import BlockEnroll from "./BlockEnroll";

const BlockList = ({ blockList, btnType, state }) => {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const blockAdd = () => {
    setEnrollModalOpen(true);
  };
  const buttonOn = () => {
    if (localStorage.getItem("clientType") == "INSPECTOR")
      return (
        <button className="blockAdd" onClick={blockAdd}>
          블럭 추가
        </button>
      );
    else return;
  };

  const blockenrollbtn = buttonOn();
  return (
    <div className="BlockList">
      {blockenrollbtn}
      {blockList.map((it) => (
        <BlockItem key={it.blockName} {...it} state={state} />
      ))}

      {enrollModalOpen && (
        <BlockEnroll setEnrollModalOpen={setEnrollModalOpen} imo={state.imo} />
      )}
    </div>
  );
};

BlockList.defaultProps = {
  blockList: [],
};

export default BlockList;
