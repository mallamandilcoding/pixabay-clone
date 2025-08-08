import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Images = () => {
  const { imgData } = useContext(PixabayContext);
  console.log("the imgdata is: " + imgData);
  return (
    <div className="flex">
      {imgData.map((img) => (
        <div key={img.id}>
          <div className="img-card">
            <img src={img.largeImageURL} alt="img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
