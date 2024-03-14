import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../../Constant';

function JewelleryChains(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  let pages = [];
  let chainItems = items.filter(item => item.type === 'chain');
  for (let i = 1; i < Math.ceil(chainItems.length / postPerPage) + 1; i++) {
    pages.push(i);
  }

  return (
    <div className="jewellery-container--chains">
    <div className="jewellery-container--chains--header">
      <h1>Chains</h1>
    </div>
    <div className="jewellery-container--chains-products">
    {props.selectedCategoryInJewellery === "chains"
          ? items
              .filter((item) => item.type === "chain")
              .slice(firstPostIndex, lastPostIndex)
              .map((item) => (
                <Link to={item.id} key={item.id}>
                  <img src={item.img[0]} alt="" />
                </Link>
              ))
          : items
              .filter((item) => item.type === "chain")
              .slice(0, 3)
              .map((item) => (
                <Link to={item.id} key={item.id}>
                  <img src={item.img[0]} alt="" />
                </Link>
              ))}
    </div>
    {props.selectedCategoryInJewellery === "chains" && (
        <div className="chain-pagination">
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
  )
}

export default JewelleryChains