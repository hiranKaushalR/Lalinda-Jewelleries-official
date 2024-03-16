import React from "react";
import { aboutChairman } from "../../assets";

function AboutChairman() {
  return (
    <div className="about-container--chairman">
      <div className="about-container--chairman--header">
        <h1>About Our Chairman</h1>
      </div>
      <div className="about-container--chairman--body">
        <div className="about-container--chairman--body--avatar">
          <img src={aboutChairman} alt="" />
          <p className="chairman-name">MR. PAMIL LALINDA</p>
        </div>
        <p>
          “At Lalinda jewelry, our legacy as a self ventured business
          intertwines you with your stories. Each piece of gold reflects our
          history , commitment to quality and the trust you place in us. we are
          honored to be part of your life journey.”
        </p>
      </div>
    </div>
  );
}

export default AboutChairman;
