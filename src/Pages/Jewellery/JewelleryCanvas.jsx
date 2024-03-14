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

  return (
    <div className="jewellery-container">
      <JewelleryHead />
      <JewelleryFilter
        setSelectedCategoryInJewellery={setSelectedCategoryInJewellery}
      />
      {selectedCategoryInJewellery === "rings" ||
      selectedCategoryInJewellery === "all" ? (
        <JewelleryRings
          selectedCategoryInJewellery={selectedCategoryInJewellery}
        />
      ) : null}
      {selectedCategoryInJewellery === "bracelets" ||
      selectedCategoryInJewellery === "all" ? (
        <JewelleryBracelets
          selectedCategoryInJewellery={selectedCategoryInJewellery}
        />
      ) : null}
      {selectedCategoryInJewellery === "chains" ||
      selectedCategoryInJewellery === "all" ? (
        <JewelleryChains
          selectedCategoryInJewellery={selectedCategoryInJewellery}
        />
      ) : null}
      {selectedCategoryInJewellery === "earrings" ||
      selectedCategoryInJewellery === "all" ? (
        <JewelleryEarrings
          selectedCategoryInJewellery={selectedCategoryInJewellery}
        />
      ) : null}
    </div>
  );
}

export default JewelleryCanvas;
