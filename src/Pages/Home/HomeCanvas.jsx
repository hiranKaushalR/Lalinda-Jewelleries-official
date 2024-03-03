import React from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";

function HomeCanvas() {
  return (
    <div className="home-container">
      <HomeHero />
      <HomeAbout />
    </div>
  );
}

export default HomeCanvas;
