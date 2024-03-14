import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { items } from "../../Constant";

function JewelleryRings(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  let pages = [];
  for (let i = 1; i < Math.ceil(items.length / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="jewellery-container--rings">
      <div className="jewellery-container--rings-header">
        <h1>Rings</h1>
      </div>
      <div className="jewellery-container--rings-products">
        {props.selectedCategoryInJewellery === "rings"
          ? items
              .filter((item) => item.type === "ring")
              .slice(firstPostIndex, lastPostIndex)
              .map((item) => (
                <Link to={item.id} key={item.id}>
                  <img src={item.img[0]} alt="" />
                </Link>
              ))
          : items
              .filter((item) => item.type === "ring")
              .slice(0, 3)
              .map((item) => (
                <Link to={item.id} key={item.id}>
                  <img src={item.img[0]} alt="" />
                </Link>
              ))}
      </div>
      {props.selectedCategoryInJewellery === "rings" && (
        <div className="ring-pagination">
          {pages.map((page, index) => {
            return (
              <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'selcted-page-pagination' : 'unselected-page-pagination'}>
                {page}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default JewelleryRings;
