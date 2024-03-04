import React from "react";
import { useState } from "react";
import { items } from "../../Constant";
import { check, blank } from "../../assets";

function HomeJewelleries() {
  const [homeFilter, setHomeFilter] = useState("all");

  return (
    <section className="home-container--jewelleries">
      <div className="home-container--jewelleries--header">
        <h1>Jewelleries</h1>
        <div className="home-container--jewelleries--header--filter-bar">
          <button onClick={() => setHomeFilter("all")}>
            <p>All</p>
            <div>
              <img src={homeFilter === "all" ? check : blank} alt="" />
            </div>
          </button>
          <button onClick={() => setHomeFilter("ring")}>
            <p>Rings</p>
            <div>
              <img src={homeFilter === "ring" ? check : blank} alt="" />
            </div>
          </button>
          <button onClick={() => setHomeFilter("bracelet")}>
            <p>Bracelets</p>
            <div>
              <img src={homeFilter === "bracelet" ? check : blank} alt="" />
            </div>
          </button>
          <button onClick={() => setHomeFilter("chain")}>
            <p>Chains</p>
            <div>
              <img src={homeFilter === "chain" ? check : blank} alt="" />
            </div>
          </button>
        </div>
      </div>
      <div className="home-container--jewelleries--body">
        {items.filter((item) => {
          // If the filter is set to "all", return true for all items
          if (homeFilter === "all") return true;
          // Otherwise, return true only for items whose type matches the filter
          return item.type === homeFilter;
        }).length === 0 ? ( // If there are no items in the filtered array
          // Render a message indicating no items available for the selected filter
          <div>No items available for the selected filter.</div>
        ) : (
          // If there are items in the filtered array
          // Filter the items again based on the filter condition
          items
            .filter((item) => {
              // If the filter is set to "all", return true for all items
              if (homeFilter === "all") return true;
              // Otherwise, return true only for items whose type matches the filter
              return item.type === homeFilter;
            })
            // Map over the filtered items to render each item
            .map(
              (item) =>
                // Render the item only if it does not have an offer
                !item.hasoffer && (
                  <div key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <span>
                      <p className="name">{item.name}</p>
                      <p className="price">LKR {item.price}</p>
                    </span>
                    <p
                      className={`${item.isStock ? "in" : "out"} stock-status`}
                    >
                      {item.isStock ? "In-stock" : "Out of stock"}
                    </p>
                  </div>
                )
            )
        )}
      </div>
    </section>
  );
}

export default HomeJewelleries;