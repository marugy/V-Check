import { useNavigate } from "react-router-dom";

const ComponentItem = ({
  faultType,
  componentName,
  sequenceNumber,
  workingStatus,
  uploadImageName,
  storeImageUrl,
  blockName,
  componentId,
}) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate("/usermain/myvessel/vesseldetail/blockdetail/componentdetail", {
      state: {
        faultType: faultType,
        componentName: componentName,
        sequenceNumber: sequenceNumber,
        workingStatus: workingStatus,
        uploadImageName: uploadImageName,
        storeImageUrl: storeImageUrl,
        blockName: blockName,
        componentId: componentId,
      },
    });
  };

  return (
    <div className="ComponentItem">
      <img src={storeImageUrl} alt={""} />
      <br />
      불량 타입 : {faultType}
      <br />
      부품 이름 : {componentName}
      <br />
      부품 일련번호: {sequenceNumber}
      <br />
      작업 상태 : {workingStatus}
      <br />
      업로드 이미지 명 : {uploadImageName}
      <br />
      블럭 이름 : {blockName}
      <br />
      <button onClick={handleDetail}>상세보기</button>
    </div>
  );
};

export default ComponentItem;
