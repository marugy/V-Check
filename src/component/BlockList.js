import { useState } from "react";
import BlockItem from "./BlockItem";
import BlockEnroll from "./BlockEnroll";

const BlockList = ({
  blockList,
  state,
  enrollModalOpen,
  setEnrollModalOpen,
}) => {
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
      <div className="category_wrapper">
        <div>블럭 명</div>
        <div>작업 단계</div>
        <div>상세보기</div>
      </div>
      {blockList.map((it) => (
        <BlockItem key={it.blockName} {...it} state={state} />
      ))}

      {enrollModalOpen && (
        <BlockEnroll
          setEnrollModalOpen={setEnrollModalOpen}
          enrollModalOpen={enrollModalOpen}
          imo={state.imo}
        />
      )}
    </div>
  );
};

BlockList.defaultProps = {
  blockList: [],
};

export default BlockList;
