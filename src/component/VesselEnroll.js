const VesselEnroll = () => {
  return (
    <div className="VesselEnroll">
      <div className="vessel_wrapper">
        <h2>
          서비스에 등록할 선박 정보를
          <br /> 입력하세요
        </h2>
        <form>
          IMO <input type={"text"} />
          <br />
          선박 이름 <input type={"text"} />
          <br />
          선박 OWNER <input type={"text"} />
          <br />
          선박 종류 <input type={"text"} />
          <br />
          총 톤 수 <input type={"text"} />
          <br />
          <input type={"submit"} value="선박 등록" />
        </form>
      </div>
    </div>
  );
};

export default VesselEnroll;
