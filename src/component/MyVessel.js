import { useState } from "react";

import VesselList from "./VesselList";

const MyVessel = () => {
  const [vesselData, setVesselData] = useState({});
  const [searchInfo, setsearchInfo] = useState({
    imo: "",
    name: "",
    type: "",
    ton: "",
  });

  useState(() => {
    fetch("http://34.64.185.37:8080/v2/client-vessel", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setVesselData(result);
      });
  });

  return (
    <div className="MyVessel">
      <h2>MY 선박</h2>
      <VesselList vesselList={vesselData.vesselInfoList} btnType={"detail"} />
    </div>
  );
};

export default MyVessel;
