import { useEffect, useRef, useState } from "react";

const Practice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://43.200.231.35/test/1", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error".error));
  }, []);

  const name = data.auth;

  return <div>{name}</div>;
};

export default Practice;
