import React from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeJewelleries from "./HomeJewelleries";
import HomeOffers from "./HomeOffers";
import HomeNewCollection from "./HomeNewCollection";
import HomeJewelleryCollection from "./HomeJewelleryCollection";

function HomeCanvas() {
  return (
    <div className="home-container">
      <HomeHero />
      <HomeAbout />
      <HomeJewelleries />
      <HomeOffers />
      <HomeNewCollection />
      <HomeJewelleryCollection />
    </div>
  );
}

export default HomeCanvas;
