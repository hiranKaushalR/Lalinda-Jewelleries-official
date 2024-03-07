import React from "react";
import {
  jewelleryEarrings1,
  jewelleryEarrings2,
  jewelleryEarrings3,
  jewelleryEarrings4,
} from "../../assets";

function JewelleryEarrings() {
  return (
    <div className="jewellery-container--earrings">
      <div className="jewellery-container--earrings-header">
        <h1>Earrings</h1>
      </div>
      <div className="jewellery-container--earrings-products">
        <div className="product-section-1">
          <img src={jewelleryEarrings1} alt="" />
        </div>
        <div className="product-section-2">
          <img src={jewelleryEarrings2} alt="" />
          <img src={jewelleryEarrings3} alt="" />
        </div>
        <div className="product-section-3">
          <img src={jewelleryEarrings4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default JewelleryEarrings;
