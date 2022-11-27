import { useState } from "react";
import ComponentItem from "./ComponentItem";
import ComponentEnroll from "./ComponentEnroll";

const ComponentList = ({
  componentList,
  imo,
  blockName,
  uploadModalOpen,
  setUploadModalOpen,
  setChange,
}) => {
  const componentAdd = () => {
    setUploadModalOpen(true);
  };

  const buttonOn = () => {
    if (localStorage.getItem("clientType") == "INSPECTOR")
      return <button onClick={componentAdd}>부품 업로드</button>;
    else return;
  };

  const componentEnrollBtn = buttonOn();

  return (
    <div className="ComponentList">
      <div className="btn">{componentEnrollBtn}</div>
      <div className="category_wrapper">
        <div>부품 명</div>
        <div>일련 번호</div>
        <div>작업 상태</div>
        <div>불량 타입</div>
        <div>상세 보기</div>
      </div>
      {componentList.map((it) => (
        <ComponentItem
          key={it.componentId}
          {...it}
          imo={imo}
          setChange={setChange}
        />
      ))}

      {uploadModalOpen && (
        <ComponentEnroll
          setUploadModalOpen={setUploadModalOpen}
          blockName={blockName}
        />
      )}
    </div>
  );
};

ComponentList.defaultProps = {
  componentList: [],
};

export default ComponentList;
