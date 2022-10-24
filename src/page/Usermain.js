import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import VesselEnroll from "../component/VesselEnroll";

const Usermain = () => {
  const [userdata, setUserData] = useState({});

  useEffect(() => {
    fetch("http://34.64.185.37:8080/v1/client", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => console.log("error".error));
  }, []);

  return (
    <div className="Usermain">
      <Header userdata={userdata} />
      <div className="Content">
        <VesselEnroll />
      </div>
    </div>
  );
};

export default Usermain;
