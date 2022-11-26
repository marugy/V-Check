import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ComponentEnroll = ({ setEnrollModalOpen, blockName }) => {
  const navigate = useNavigate();
  const [componentName, setComponentName] = useState();
  const [sequenceNumber, setSequenceNumber] = useState("");
  const [imageUploadName, setImageUploadName] = useState();

  const componentNameHandler = (e) => {
    setComponentName(e.target.value);
  };
  const sequenceNumberHandler = (e) => {
    setSequenceNumber(e.target.value);
  };
  const imgHandler = (e) => {
    setImageUploadName(e.target.value);
  };

  const checkEnroll = (e) => {
    e.preventDefault();
    const file = e.currentTarget["fileInput"].files[0];
    const data = new FormData();
    data.append("blockName", blockName);
    data.append("componentName", componentName);
    data.append("sequenceNumber", sequenceNumber);
    data.append("imageUploadName", file);

    fetch("http://34.64.185.37:8080/v2/component/register", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: data,
    })
      .then((response) => {})
      .catch((error) => console.log("error", error));
  };
  const cancelModal = () => {
    setEnrollModalOpen(false);
  };
  return (
    <div className="ComponentEnroll">
      <div className="Component_wrapper">
        <h2>선박에 등록할 블럭 정보를 입력하세요</h2>
        <form onSubmit={checkEnroll}>
          부품 이름 :{" "}
          <input type={"text"} name="imo" onChange={componentNameHandler} />
          <br />
          부품 일련 번호 :{" "}
          <input type={"text"} onChange={sequenceNumberHandler} />
          <br />
          부품 이미지 :{" "}
          <input
            type={"file"}
            id="fileInput"
            accept="image/*"
            onChange={imgHandler}
          />
          <br />
          <button type="submit">부품 등록</button>
          <button className="cancelBtn" onClick={cancelModal}>
            취소
          </button>
        </form>
      </div>
    </div>
  );
};
export default ComponentEnroll;
