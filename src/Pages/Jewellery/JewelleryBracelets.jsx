import React from "react";
import { jewelleryBracelet1, jewelleryBracelet2 } from "../../assets";

function JewelleryBracelets() {
  return (
    <div className="jewellery-container--bracelets">
      <div className="jewellery-container--bracelets--header">
        <h1>Bracelets</h1>
      </div>
      <div className="jewellery-container--bracelets-products">
        <img src={jewelleryBracelet1} alt="" />
        <img src={jewelleryBracelet2} alt="" />
      </div>
    </div>
  );
}

export default JewelleryBracelets;
