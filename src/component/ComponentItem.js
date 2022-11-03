import { width } from "@mui/system";

const ComponentItem = ({
  faultType,
  componentName,
  sequenceNumber,
  workingStatus,
  uploadImageName,
  storeImageUrl,
  componentId,
}) => {
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
      업로드 이미지 파일 이름 : {uploadImageName}
      <br />
      부품 ID : {componentId}
    </div>
  );
};

export default ComponentItem;
