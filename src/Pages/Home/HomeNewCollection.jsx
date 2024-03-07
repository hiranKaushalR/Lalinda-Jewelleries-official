import React from "react";
import {
  homeCollection1,
  homeCollection2,
  homeCollection3,
} from "../../assets";

function HomeNewCollection() {
  return (
    <section className="home-container--new-collection">
      <div className="home-container--new-collection--header">
        <h1>New Collection</h1>
      </div>
      <div className="home-container--new-collection--body">
        <div className="home-container--new-collection--body--image-collection">
          <div className="image-selection-section-1">
            <img src={homeCollection1} alt="" />
          </div>
          <div className="image-selection-section-2">
            <img src={homeCollection2} alt="" />
            <img src={homeCollection3} alt="" />
          </div>
        </div>
        <button>More</button>
      </div>
    </section>
  );
}

export default HomeNewCollection;
