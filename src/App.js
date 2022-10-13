import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Usermain from "./component/Usermain.js";
import Login from "./page/Login.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/usermain" element={<Usermain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
