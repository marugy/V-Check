import { useState } from "react";
import { useNavigate } from "react-router-dom";
import spinner from "../spinner/spinner.gif";

const ComponentEnroll = ({ setUploadModalOpen, blockName }) => {
  const navigate = useNavigate();
  const [componentName, setComponentName] = useState();
  const [sequenceNumber, setSequenceNumber] = useState("");
  const [imageUploadName, setImageUploadName] = useState();
  const [loadingModalOpen, setLoadingModalOpen] = useState(false);

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
    setLoadingModalOpen(true);
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
      .then((response) => {
        setUploadModalOpen(false);
        setLoadingModalOpen(false);
      })
      .catch((error) => console.log("error", error));
  };
  const cancelModal = () => {
    setUploadModalOpen(false);
  };

  const loading = () => {
    return (
      <div className="loadingModal_wrapper">
        <div className="loadingModal">
          <img src={spinner} alt="로딩중" width="5%" />
        </div>
      </div>
    );
  };

  const load = loading();

  return (
    <div className="ComponentEnroll">
      <div className="Component_wrapper">
        {loadingModalOpen && load}
        <h2>
          블럭에 업로드할 <br />
          부품 정보를 입력하세요
        </h2>
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
