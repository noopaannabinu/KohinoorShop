import React from "react";
import "./viewproducts.css";

const Gallery = () => {
  const images = [
    require("../../assets/images/k2.jpg"),
    require("../../assets/images/k4.jpg"),
    require("../../assets/images/ko10.jpg"),
    require("../../assets/images/ko15.jpg"),
    require("../../assets/images/k3.jpg"),
    require("../../assets/images/k6.jpg"),
  ];

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div className="image-wrapper" key={index}>
          <img src={src} alt={`img-${index}`} width={300} height={300} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
