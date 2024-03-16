import React from "react";
import { newImage1, newImage2, newImage3, newImage4 } from "../../assets";

function NewGallery() {
  return (
    <div className="new-container--gallery flex justify-center items-center flex-col border-white my-5 md:gap-2">
      <div className="new-container--gallery-image-section-1">
        <img src={newImage1} alt="" />
      </div>
      <div className="new-container--gallery-image-section-2 sm:flex md:gap-2 xl:gap-6">
        <div className="section-1">
          <img src={newImage2} alt="" />
        </div>
        <div className="section-2 flex flex-col md:gap-3">
          <img src={newImage3} alt="" />
          <img src={newImage4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewGallery;
