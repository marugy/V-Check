import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlockEnroll = ({ setEnrollModalOpen, imo }) => {
  const navigate = useNavigate();
  const [block_imo, setImo] = useState(imo);
  const [block_name, setVessel_name] = useState("");
  const [working_step, setVessel_type] = useState("");

  const imoHandler = (e) => {
    setImo(e.target.value);
  };
  const block_nameHandler = (e) => {
    setVessel_name(e.target.value);
  };
  const working_stepHandler = (e) => {
    setVessel_type(e.target.value);
  };

  const checkEnroll = (e) => {
    fetch("http://34.64.185.37:8080/v2/block/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        imo: String(block_imo),
        block_name: block_name,
        working_step: working_step,
      }),
    })
      .then((response) => {
        navigate("/usermain/myvessel");
      })
      .catch((error) => console.log("error", error));
    setEnrollModalOpen(false);
  };

  return (
    <div className="VesselEnroll">
      <div className="vessel_wrapper">
        <h2>선박에 등록할 블럭 정보를 입력하세요</h2>
        <form>
          IMO :{" "}
          <input type={"text"} value={imo} name="imo" onChange={imoHandler} />
          <br />
          블록 이름 :{" "}
          <input
            type={"text"}
            placeholder="블럭 이름"
            onChange={block_nameHandler}
          />
          <br />
          작업 단계 :{" "}
          <input
            type={"text"}
            placeholder="ASSEMBLY or INSTALL"
            onChange={working_stepHandler}
          />
          <br />
          <button onClick={checkEnroll}>블럭 등록</button>
        </form>
      </div>
    </div>
  );
};

export default BlockEnroll;
