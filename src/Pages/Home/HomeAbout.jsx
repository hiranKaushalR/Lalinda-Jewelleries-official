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
          Welcome to Lalinda jewelers, where every piece tells a story of
          craftsmanship, and a journey that spans generations. Established with
          a vision to redefine luxury and elegance in Sri Lanka, Since 2009
          Lalinda jewelers has evolved as a self venture, visionary with a
          passion for the artistry of jewelry into the current destination. At
          the heart of Lalinda jeweler's success is our dedication to
          unparalleled craftsmanship. Each piece is a testament to the skills
          passed down through generations, combining traditional techniques with
          contemporary aesthetics. Our collections have evolved with the times,
          embracing modern trends while staying true to the essence of timeless
          beauty.
        </p>
      </div>
    </section>
  );
}

export default HomeAbout;
