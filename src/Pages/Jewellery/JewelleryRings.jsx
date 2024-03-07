import React from "react";
import {
  jewelleryRing1,
  jewelleryRing2,
  jewelleryRing3,
  jewelleryRing4,
} from "../../assets";

function JewelleryRings() {
  return (
    <div className="jewellery-container--rings">
      <div className="jewellery-container--rings-header">
        <h1>Rings</h1>
      </div>
      <div className="jewellery-container--rings-products">
        <div className="product-section-1">
          <img src={jewelleryRing1} alt="" />
        </div>
        <div className="product-section-2">
          <img src={jewelleryRing2} alt="" />
          <img src={jewelleryRing3} alt="" />
        </div>
        <div className="product-section-3">
          <img src={jewelleryRing4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default JewelleryRings;
