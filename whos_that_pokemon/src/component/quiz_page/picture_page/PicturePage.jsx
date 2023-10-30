import React, { useEffect, useState } from "react";
import "./picturePage.css";
export default function PicturePage({ prop }) {
  const [image, SetImage] = useState(null);
  useEffect(() => {
    SetImage(prop.img);
  }, [prop.img]);
  return (
    <div className='image-container'>
      <img
        className={`question-image ${
          prop.toReveal === true ? "reveal" : "notreveal"
        }`}
        src={image}
      />
    </div>
  );
}
