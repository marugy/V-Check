import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../component/Header";
import VesselLookup from "../component/VesselLookup";
import MyVessel from "../component/MyVessel";
import VesselEnroll from "../component/VesselEnroll";

const Usermain = () => {
  const [userdata, setUserData] = useState({});

  useEffect(() => {
    fetch("http://34.64.185.37:8080/v1/client", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
      <Routes>
        <Route path="/vessellookup" element={<VesselLookup />} />
        <Route path="/usermain/myvessel" element={<MyVessel />} />
        <Route path="/vesselenroll" element={<VesselEnroll />} />
      </Routes>
      <div className="Content"></div>
    </div>
  );
};

export default Usermain;
