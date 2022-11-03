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
      faultType : {faultType}
      <br />
      componentName : {componentName}
      <br />
      sequenceNumber: {sequenceNumber}
      <br />
      workingStatus : {workingStatus}
      <br />
      uploadImageName : {uploadImageName}
      <br />
      storeImageUrl : <img src={storeImageUrl} alt={""} />
      <br />
      componentId : {componentId}
    </div>
  );
};

export default ComponentItem;
