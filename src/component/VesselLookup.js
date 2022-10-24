import { useEffect, useState } from "react";

import VesselList from "./VesselList";

const VesselLookup = () => {
  const [Vesseldata, setVesselData] = useState([]);
  const [imo, setImo] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    fetch(
      `http://34.64.185.37:8080//v1/vessel/list?imo=${imo}&vessel_name=${name}&vessel_type=${type}`,
      {
        method: "POST",
        header: { Authorization: localStorage.getItem("access_token") },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setVesselData(result);
      });
  }, []);
  return (
    <div className="VesselLookup">
      <VesselList />
    </div>
  );
};

export default VesselLookup;
