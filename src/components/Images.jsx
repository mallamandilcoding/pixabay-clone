import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Images = () => {
  const { imgData } = useContext(PixabayContext);
  console.log("the imgdata is: " + imgData);
  return (
    <div className="container my-5">
      <div className="flex">
        {imgData.map((image) => (
          <div key={image.id}>
            <div className="item">
              <img src={image.largeImageURL} alt="altbalaji" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
