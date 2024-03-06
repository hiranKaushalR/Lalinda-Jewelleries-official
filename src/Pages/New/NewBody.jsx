import React from "react";
import { ring, bracelet } from "../../assets";

function NewBody() {
  return (
    <div className="new-container--body">
      <div className="new-container--body--para">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="new-container--body--more">
        <div className="new-container--body--more--item-1">
            <img src={ring} alt="ring" />
            <button>More</button>
        </div>
        <div className="new-container--body--more--item-2">
            <img src={bracelet} alt="bracelet" />
            <button>More</button>
        </div>
      </div>
    </div>
  );
}

export default NewBody;
