import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { items } from "../../Constant";

function JewelleryEarrings(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  let pages = [];
  let earringItems = items.filter((item) => item.type === "earring");
  for (let i = 1; i < Math.ceil(earringItems.length / postPerPage) + 1; i++) {
    pages.push(i);
  }

  return (
    <div className="jewellery-container--earrings">
      <div className="jewellery-container--earrings-header">
        <h1>Earrings</h1>
      </div>
      <div className="jewellery-container--earrings-products">
        {props.selectedCategoryInJewellery === "earrings"
          ? items
              .filter((item) => item.type === "earring")
              .slice(firstPostIndex, lastPostIndex)
              .map((item) => (
                <Link to={item.id} key={item.id}>
                  <img src={item.img[0]} alt="" />
                </Link>
              ))
          : items
              .filter((item) => item.type === "earring")
              .slice(0, 3)
              .map((item) => (
                <Link to={item.id} key={item.id}>
                  <img src={item.img[0]} alt="" />
                </Link>
              ))}
      </div>
      {props.selectedCategoryInJewellery === "earrings" && (
        <div className="earring-pagination">
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={
                  page === currentPage
                    ? "selcted-page-pagination"
                    : "unselected-page-pagination"
                }
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default JewelleryEarrings;
