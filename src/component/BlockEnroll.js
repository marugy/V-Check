import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlockEnroll = ({ setEnrollModalOpen, imo }) => {
  const navigate = useNavigate();

  const [enrollInfo, setEnrollInfo] = useState({
    imo: imo,
    blockName: "",
    workingStep: "PieceAssembly",
  });

  const selectList = [
    "PieceAssembly",
    "SubBlockAssembly",
    "BlockAssembly",
    "INSTALL"
  ];

  const handleChangeInfo = (e) => {
    setEnrollInfo({
      ...enrollInfo,
      [e.target.name]: e.target.value,
    });
  };

  const checkEnroll = (e) => {
    alert(enrollInfo.imo+enrollInfo.blockName+enrollInfo.workingStep)
    fetch("http://34.64.185.37:8080/v2/block/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        imo: enrollInfo.imo,
        blockName: enrollInfo.blockName,
        workingStep: enrollInfo.workingStep,
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
          <input type={"text"} value={imo} name="imo" onChange={handleChangeInfo} />
          <br />
          블록 이름 :{" "}
          <input
            type={"text"}
            name="blockName"
            placeholder="블럭 이름"
            onChange={handleChangeInfo}
          />
          <br />
          작업 단계 :
          <select
            onChange={handleChangeInfo}
            value={enrollInfo.workingStep}
            name="workingStep"
          >
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <button onClick={checkEnroll}>블럭 등록</button>
        </form>
      </div>
    </div>
  );
};

export default BlockEnroll;
