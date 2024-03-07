import React from "react";
import { jewelerySliderAssets } from "../../Constant";
import { Carousel } from "flowbite-react";

function JewellerySlider() {
  return (
    <div className="jewellery-container--slider">
      <Carousel leftControl=" " rightControl=" ">
        {jewelerySliderAssets.map((asset) => (
          <img src={asset.img} alt="" className="h-full" key={asset.id} />
        ))}
      </Carousel>
    </div>
  );
}

export default JewellerySlider;
