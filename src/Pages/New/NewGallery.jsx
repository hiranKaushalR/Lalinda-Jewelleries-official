import React from "react";
import { newImage1, newImage2, newImage3, newImage4 } from "../../assets";

function NewGallery() {
  return (
    <div className="new-container--gallery">
      <div className="new-container--gallery-image-section-1">
        <img src={newImage1} alt="" />
      </div>
      <div className="new-container--gallery-image-section-2">
        <div className="section-1">
          <img src={newImage2} alt="" />
        </div>
        <div className="section-2">
          <img src={newImage3} alt="" />
          <img src={newImage4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewGallery;
