import React, { useState, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../component/Header";
import VesselLookup from "../component/VesselLookup";
import MyVessel from "../component/MyVessel";
import VesselEnroll from "../component/VesselEnroll";

// const reducer = (state, action) => {
//   let newState = [];
//   switch (action.type) {
//     case "INIT": {
//       return action.data;
//     }
//     case "CREATE": {
//       newState = [action.data, ...state];
//       break;
//     }
//     case "REMOVE": {
//       newState = state.filter((it) => it.id !== action.targetID);
//       break;
//     }
//     case "EDIT": {
//       newState = state.map((it) =>
//         it.id === action.data.id ? { ...action.data } : it
//       );
//       break;
//     }
//     default:
//       return state;
//   }
//   return newState;
// };

// // export const VesselStateContext = React.createContext();
// // export const VesselDispatchContext = React.createContext();

const Usermain = () => {
  // const [data, dispatch] = useReducer(reducer, []);
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
        localStorage.setItem("is_our_client", true);
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
