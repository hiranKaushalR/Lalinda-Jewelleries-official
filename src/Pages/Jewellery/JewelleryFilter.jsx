import React from "react";

function JewelleryFilter(props) {
  const { setSelectedCategoryInJewellery } = props;
  return (
    <div className="jewellery-container--filter">
      <ul className="jewellery-container--filter--child">
        <li
          className="all"
          onClick={() => setSelectedCategoryInJewellery("all")}
        >
          All
        </li>
        <li
          className="rings"
          onClick={() => setSelectedCategoryInJewellery("rings")}
        >
          Rings
        </li>
        <li
          className="bracelets"
          onClick={() => setSelectedCategoryInJewellery("bracelets")}
        >
          Bracelets
        </li>
        <li
          className="chains"
          onClick={() => setSelectedCategoryInJewellery("chains")}
        >
          Chians
        </li>
        <li
          className="earrings"
          onClick={() => setSelectedCategoryInJewellery("earrings")}
        >
          Earrings
        </li>
      </ul>
    </div>
  );
}

export default JewelleryFilter;
