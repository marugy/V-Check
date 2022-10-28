const VesselItem = ({ imo, vesselName, vesselType, isOwnerShip }) => {
  return (
    <div className="VesselItem">
      <div className="info">
        선박 imo : {imo}
        선박 이름 : {vesselName}
        선박 타입 : {vesselType}
        소유여부 : {isOwnerShip}
      </div>
    </div>
  );
};

export default VesselItem;
