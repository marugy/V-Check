import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ComponentEnroll = ({ setEnrollModalOpen, block_name }) => {
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
    data.append("blockName", block_name);
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
      .then((response) => {
        navigate("/usermain/myvessel");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="ComponentEnroll">
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
      </form>
    </div>
  );
};
export default ComponentEnroll;
