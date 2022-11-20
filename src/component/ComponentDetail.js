import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ComponentDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [imageUploadName, setImageUploadName] = useState();
  const imgHandler = (e) => {
    setImageUploadName(e.target.value);
  };

  const handleReupload = (e) => {
    e.preventDefault();
    const file = e.currentTarget["fileInput"].files[0];
    const data = new FormData();
    data.append("imageUploadName", file);
    data.append("componentId", state.componentId);

    fetch("http://34.64.185.37:8080/v2/component/re-upload", {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: data,
    }).then((response) => navigate("/usermain/myvessel"));
  };

  const handleWorkingStatus = () => {
    fetch("http://34.64.185.37:8080/v2/component/working-status", {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("access_token"),
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        componentId: state.componentId,
      }),
    }).then((response) => navigate("/usermain/myvessel/vesseldetail"));
  };

  return (
    <div className="ComponentDetail">
      <div className="component_wrapper">
        <img src={state.storeImageUrl} alt={""} />
        <br />
        <div className="componentInfo_wrapper">
          부품 이름 : {state.componentName}
          <br />
          부품 일련번호: {state.sequenceNumber}
          <br />
          불량 타입 : {state.faultType}
          <br />
          업로드 파일 명 : {state.uploadImageName}
          <br />
          작업 상태 : {state.workingStatus}
          <br />
          <button onClick={handleWorkingStatus}>상태 변경하기</button>
          <hr />
          <form onSubmit={handleReupload}>
            <input
              type={"file"}
              id="fileInput"
              accept="image/*"
              onChange={imgHandler}
            />
            <br />
            <button type="submit">재업로드</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
