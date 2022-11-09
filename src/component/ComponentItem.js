
const ComponentItem = ({
  faultType,
  componentName,
  sequenceNumber,
  workingStatus,
  uploadImageName,
  storeImageUrl,
  blockName
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
      업로드 이미지 명 : {uploadImageName}
      <br/>
      블럭 이름 : {blockName}
    </div>
  );
};

export default ComponentItem;
