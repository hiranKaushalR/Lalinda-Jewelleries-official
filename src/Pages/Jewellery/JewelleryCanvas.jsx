import React from "react";
import JewelleryHead from "./JewelleryHead";
import JewelleryFilter from "./JewelleryFilter";

function JewelleryCanvas(props) {
  const { setSelectedCategoryInJwellery, selectedCategoryInJwellery } = props;

  return (
    <div className="jewellery-container">
      <JewelleryHead />
      <JewelleryFilter />
    </div>
  );
}

export default JewelleryCanvas;
