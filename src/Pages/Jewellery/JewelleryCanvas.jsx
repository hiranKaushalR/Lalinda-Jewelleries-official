import React from "react";
import { useContext } from "react";
import JewelleryHead from "./JewelleryHead";
import JewelleryFilter from "./JewelleryFilter";
import JewelleryRings from "./JewelleryRings";
import JewelleryBracelets from "./JewelleryBracelets";
import JewelleryChains from "./JewelleryChains";
import JewelleryEarrings from "./JewelleryEarrings";
import { CategoryContext } from "../../CategoryProvider";

function JewelleryCanvas(props) {
  const { selectedCategoryInJewellery, setSelectedCategoryInJewellery } =
    useContext(CategoryContext);

  console.log(selectedCategoryInJewellery);

  return (
    <div className="jewellery-container">
      <JewelleryHead />
      <JewelleryFilter
        setSelectedCategoryInJewellery={setSelectedCategoryInJewellery}
      />
      {selectedCategoryInJewellery === "rings" ||
      selectedCategoryInJewellery === "all" ? (
        <JewelleryRings />
      ) : null}
      {selectedCategoryInJewellery === "bracelets" ||
      selectedCategoryInJewellery === "all" ? (
        <JewelleryBracelets />
      ) : null}
      {selectedCategoryInJewellery === "chains" ||
      selectedCategoryInJewellery === "all" ? (
        <JewelleryChains />
      ) : null}
      {selectedCategoryInJewellery === "earrings" ||
      selectedCategoryInJewellery === "all" ? (
        <JewelleryEarrings />
      ) : null}
    </div>
  );
}

export default JewelleryCanvas;
