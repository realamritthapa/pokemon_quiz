import React from "react";
import "./picturePage.css";
export default function PicturePage({ prop }) {
  console.log(prop);
  return (
    <div className='image-container'>
      <img
        className={`question-image ${
          prop.toReveal === true ? "reveal" : "notreveal"
        }`}
        src={prop.img}
      />
    </div>
  );
}
