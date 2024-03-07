import React from "react";
import { Carousel } from "flowbite-react";
import { heroSlide } from "../../Constant";

function HomeHero() {
  return (
    <div className="home-container--hero">
      <Carousel leftControl=" " rightControl=" ">
        {heroSlide.map ((slide) => (
            <img src={slide.img} alt="" className="h-full" key={slide.id}/>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeHero;
