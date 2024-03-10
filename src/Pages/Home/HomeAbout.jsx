import React from "react";
import { homeAbout } from "../../assets";

function HomeAbout() {
  return (
    <section className="home-container--about">
      <div className="home-container--about--header">
        <h1>STORY OF LALINDA JEWELLERIES</h1>
      </div>
      <div className="home-container--about--body">
        <div className="ab-img">
          <img src={homeAbout} alt="" />
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
    </section>
  );
}

export default HomeAbout;
