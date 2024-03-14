import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { items } from "../../Constant";

function JewelleryBracelets(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  let pages = [];
  let braceletItems = items.filter(item => item.type === 'bracelet');
  for (let i = 1; i < Math.ceil(braceletItems.length / postPerPage) + 1; i++) {
    pages.push(i);
  }

  return (
    <div className="jewellery-container--bracelets">
      <div className="jewellery-container--bracelets--header">
        <h1>Bracelets</h1>
      </div>
      <div className="jewellery-container--bracelets-products">
      {props.selectedCategoryInJewellery === "bracelets"
          ? items
              .filter((item) => item.type === "bracelet")
              .slice(firstPostIndex, lastPostIndex)
              .map((item) => (
                <Link to={item.id} key={item.id}>
                  <img src={item.img[0]} alt="" />
                </Link>
              ))
          : items
              .filter((item) => item.type === "bracelet")
              .slice(0, 3)
              .map((item) => (
                <Link to={item.id} key={item.id}>
                  <img src={item.img[0]} alt="" />
                </Link>
              ))}
      </div>
      {props.selectedCategoryInJewellery === "bracelets" && (
        <div className="bracelet-pagination">
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

export default JewelleryBracelets;
