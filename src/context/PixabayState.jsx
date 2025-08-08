import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imgData, setImgData] = useState([]);
  const api_key = "51673492-22adb482764dbe04cf9b0877b";
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=nepal&image_type=photo`
      );
      const data = await api.json();
      setImgData(data.hits);
      console.log("my data = ", data);
    };
    fetchDataFromApi();
  }, []);

  return (
    <PixabayContext.Provider value={{ imgData }}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
