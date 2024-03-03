import React from "react";
import { Carousel } from "flowbite-react";
import { heroSlider1, heroSlider2, heroSlider3 } from "../../assets";
import { heroSlide } from "../../Constant";

function HomeHero() {
  return (
    <div className="h-[514px]">
      <Carousel leftControl=" " rightControl=" ">
        {heroSlide.map ((slide) => (
            <img src={slide.img} alt="" className="h-full" />
        ))}
      </Carousel>
    </div>
  );
}

export default HomeHero;
