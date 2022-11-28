import { useState } from "react";

const BlockEnroll = ({ setEnrollModalOpen, enrollModalOpen, imo }) => {
  const [enrollInfo, setEnrollInfo] = useState({
    imo: imo,
    blockName: "",
    workingStep: "PieceAssembly",
  });

  const selectList = [
    { id: 0, type: "PieceAssembly", name: "소조립" },
    { id: 1, type: "SubBlockAssembly", name: "중조립" },
    { id: 2, type: "BlockAssembly", name: "대조립" },
    { id: 3, type: "INSTALL", name: "선행 의장" },
  ];

  const handleChangeInfo = (e) => {
    setEnrollInfo({
      ...enrollInfo,
      [e.target.name]: e.target.value,
    });
  };

  const checkEnroll = (e) => {
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
    }).then((response) => {
      setEnrollModalOpen(false);
    });
  };

  const cancelModal = () => {
    setEnrollModalOpen(false);
  };

  return (
    <div className="BlockEnroll">
      <div className="Block_wrapper">
        <h2>
          선박에 등록할
          <br />
          블럭 정보를 입력하세요
        </h2>
        <form>
          IMO : <br />
          <input
            type={"text"}
            value={imo}
            name="imo"
            onChange={handleChangeInfo}
          />
          <br />
          블록 이름 : <br />
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
              <option value={item.type} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <br />
          <button type="submit" onClick={checkEnroll}>
            블럭 등록
          </button>
          <button className="cancelBtn" onClick={cancelModal}>
            취소
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlockEnroll;
