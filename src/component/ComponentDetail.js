import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ComponentDetail = ({
  setDetailModalOpen,
  faultType,
  componentName,
  sequenceNumber,
  workingStatus,
  uploadImageName,
  storeImageUrl,
  blockName,
  componentId,
  imo,
}) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [imageUploadName, setImageUploadName] = useState();

  const falutTypeList = {
    GOOD: "정상",
    FAULT_TYPE_201: "가공불량",
    FAULT_TYPE_202: "단차",
    FAULT_TYPE_203: "덕트 손상",
    FAULT_TYPE_205: "바인딩 불량",
    FAULT_TYPE_206: "보강재 설치 불량",
    FAULT_TYPE_207: "보온재 손상",
    FAULT_TYPE_208: "설치 불량",
    FAULT_TYPE_209: "연결 불량",
    FAULT_TYPE_210: "연계 처리 불량",
    FAULT_TYPE_211: "케이블 손상",
    FAULT_TYPE_212: "테이프 불량",
    FAULT_TYPE_213: "함석 처리 불량",
    FAULT_TYPE_401: "볼트 체결 불량",
    FAULT_TYPE_402: "파이프 손상",
  };

  const workingStatusList = {
    WorkingStart: "재작업 시작",
    WorkingIng: "작업 중",
    WorkingComplete: "작업 완료",
    InspectionComplete: "검사 완료",
  };

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
    }).then((response) => setDetailModalOpen(false));
  };

  const cancelModal = () => {
    setDetailModalOpen(false);
  };

  const buttonOn = () => {
    if (localStorage.getItem("clientType") == "INSPECTOR")
      return (
        <div>
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
      );
    else return;
  };

  const reuploadBtn = buttonOn();

  return (
    <div className="ComponentDetail">
      <div className="componentDetail_wrapper">
        <div className="img_wrapper">
          <img src={storeImageUrl} alt={""} />
        </div>
        <div className="componentInfoTotal_wrapper">
          <div className="componentInfo_wrapper">
            부품 이름 : {componentName}
            <br />
            부품 일련번호: {sequenceNumber}
            <br />
            불량 타입 : {falutTypeList[faultType]}
            <br />
            업로드 파일 명 : {uploadImageName}
            <br />
            작업 상태 : {workingStatusList[workingStatus]}
          </div>
          <div className="btn_wrapper">
            <div>
              <button onClick={handleWorkingStatus}>상태 변경하기</button>
            </div>
            {reuploadBtn}
            <div>
              <button className="cancelBtn" onClick={cancelModal}>
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
