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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default AboutChairman;
