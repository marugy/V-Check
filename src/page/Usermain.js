import React, { useState, useEffect } from "react";
import Header from "../component/Header";

const Usermain = () => {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    fetch("/v1/client", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((response) => response.json())
      .then((result) => setUserData(result))
      .catch((error) => console.log("error".error));
  }, []);

  console.log(userdata);

  return (
    <div className="Usermain">
      <Header userdata={userdata} />
    </div>
  );
};

export default Usermain;
