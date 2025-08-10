import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imgData, setImgData] = useState([]);
  const [query, setQuery] = useState("nepal");
  const api_key = "51673492-22adb482764dbe04cf9b0877b";
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo`
      );
      const data = await api.json();
      setImgData(data.hits);
      // console.log("my data = ", data);
    };
    fetchDataFromApi();
  }, [query]);

  const fetchImageByCategory = async (cat) => {
    console.log("cat is: " + cat);
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setImgData(data.hits);
    // console.log(data.hits);
  };

  return (
    <PixabayContext.Provider
      value={{ imgData, fetchImageByCategory, setQuery }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
