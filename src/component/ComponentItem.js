import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ComponentDetail from "./ComponentDetail";

const ComponentItem = ({
  faultType,
  componentName,
  sequenceNumber,
  workingStatus,
  uploadImageName,
  storeImageUrl,
  blockName,
  componentId,
  imo,
  setChange,
}) => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const componentDetail = () => {
    setDetailModalOpen(true);
  };

  const falutTypeList = {
    GOOD: "정상",
    FAULT_TYPE_201: "가공불량",
    FAULT_TYPE_202: "단차",
    FAULT_TYPE_203: "덕트 손상",
    FAULT_TYPE_205: "바인딩 불량",
    FAULT_TYPE_206: "보강재 설치 불량",
    FAULT_TYPE_207: "보온재 손상",
    FAULT_TYPE_208: "설치 불량",
    FAULT_TYPE_209: "연결 불량",
    FAULT_TYPE_210: "연계 처리 불량",
    FAULT_TYPE_211: "케이블 손상",
    FAULT_TYPE_212: "테이프 불량",
    FAULT_TYPE_213: "함석 처리 불량",
    FAULT_TYPE_401: "볼트 체결 불량",
    FAULT_TYPE_402: "파이프 손상",
  };

  const workingStatusList = {
    WorkingStart: "재작업 필요",
    WorkingIng: "재작업 중",
    WorkingComplete: "재작업 완료",
    InspectionComplete: "검사 완료",
  };

  return (
    <div className="ComponentItem">
      <div className="componentInfo_wrapper">
        <div>{componentName}</div>
        <div>{sequenceNumber}</div>
        <div>{workingStatusList[workingStatus]}</div>
        <div>{falutTypeList[faultType]}</div>
        <div>
          <button onClick={componentDetail}>상세보기</button>
        </div>
      </div>

      {detailModalOpen && (
        <ComponentDetail
          setChange={setChange}
          setDetailModalOpen={setDetailModalOpen}
          faultType={faultType}
          componentName={componentName}
          sequenceNumber={sequenceNumber}
          workingStatus={workingStatus}
          uploadImageName={uploadImageName}
          storeImageUrl={storeImageUrl}
          blockName={blockName}
          componentId={componentId}
          imo={imo}
        />
      )}
    </div>
  );
};

export default ComponentItem;
