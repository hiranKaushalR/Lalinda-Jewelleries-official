import React from "react";
import { Link } from "react-router-dom";
import { items } from "../../Constant";

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
      {
  items.slice(0, 2).map((item) => (
    <div key={item.id}>
      {item.img && item.img[0] && (
        <img src={item.img[0]} alt={item.name} />
      )}
      <Link to={`${item.id}`}><button>More</button></Link>
    </div>
  ))
}
      </div>
    </div>
  );
}

export default NewBody;
