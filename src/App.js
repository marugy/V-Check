import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Usermain from "./page/Usermain.js";
import Login from "./page/Login.js";
import Loading from "./page/Loading.js";
import SignUp from "./page/SignUp.js";
import VesselEnroll from "./component/VesselEnroll";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/usermain" element={<Usermain />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="vesselenroll" element={<VesselEnroll />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
