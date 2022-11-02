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
    fetch("http://34.64.185.37:8080/v1/component/register", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        block_name: block_name,
        componentName: componentName,
        sequenceNumber: sequenceNumber,
        imageUploadName: imageUploadName,
      }),
    })
      .then((response) => {
        navigate("/usermain/myvessel");
      })
      .catch((error) => console.log("error", error));
    setEnrollModalOpen(false);
  };

  return (
    <div className="ComponentEnroll">
      <h2>선박에 등록할 블럭 정보를 입력하세요</h2>
      <form>
        부품 이름 :{" "}
        <input type={"text"} name="imo" onChange={componentNameHandler} />
        <br />
        부품 일련 번호 :{" "}
        <input
          type={"text"}
          placeholder="블럭 이름"
          onChange={sequenceNumberHandler}
        />
        <br />
        부품 이미지 : <input type={"file"} onChange={imgHandler} />
        <br />
        <button onClick={checkEnroll}>블럭 등록</button>
      </form>
    </div>
  );
};
export default ComponentEnroll;
