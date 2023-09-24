import React from "react";
export default function PicturePage({ prop }) {
  return (
    <div>
      <img src={prop.img} />
    </div>
  );
}
