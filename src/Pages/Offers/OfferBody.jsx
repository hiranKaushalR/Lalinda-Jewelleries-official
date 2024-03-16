import React from "react";
import { Link } from "react-router-dom";
import { items } from "../../Constant";

function OfferBody() {
  return (
    <div className="offers-container--body">
      <div className="offers-container--body--para">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolorem
          deserunt atque nihil laboriosam aperiam fuga, maxime facilis fugiat
          vero fugit. Facilis vitae laborum error eius maiores qui quisquam
          minima vel, fugit rerum explicabo doloremque laboriosam illo
          voluptates dolor necessitatibus tempore voluptas iste mollitia unde
          ullam commodi ut beatae assumenda!
        </p>
      </div>
      <div className="offers-container--body--products">
        {items.map(
          (item) =>
            item.hasOffer && (
              <div>
                <Link to={item.id}>
                  <img src={item.img[0]} alt="" />
                  <span>
                    <span className="name-and-stock-status">
                      <p className="name-and-stock-status--name">{item.name}</p>{" "}
                      <div className="carat-weight--container">
                      <p className="carat">{item.carat}k</p>
                      <p className="weight">{item.weight}g</p>
                    </div>
                      <p
                        className={`${
                          item.isStock ? "in" : "out"
                        } name-and-stock-status--stock-status`}
                      >
                        {item.isStock ? "In-stock" : "Out of stock"}
                      </p>
                    </span>
                    {/* <span className="has-offer-price">
                      <p className="has-offer-price--old">LKR {item.price}</p>
                      <p className="has-offer-price--new">
                        LKR {item.offerPrice}
                      </p>
                    </span> */}
                  </span>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default OfferBody;
