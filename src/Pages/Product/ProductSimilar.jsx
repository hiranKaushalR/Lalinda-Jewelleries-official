import React from "react";
import { items } from "../../Constant";
import { Link } from "react-router-dom";

function ProductSimilar(props) {
  const { product } = props;
  const { setSelectedCategoryInJwellery } = props;

  // Filter items with matching type and exclude the current product
  const similarItems = items.filter(
    (item) => item.type === product.type && item.id !== product.id
  );

  // If there are no similar items, include dissimilar items
  const displayItems =
    similarItems.length > 0 ? similarItems.slice(0, 3) : items.slice(0, 3);

  return (
    <div className="product-container--similar">
      <div className="product-container--similar--header">
        <h1>Similar Items</h1>
      </div>
      <div className="product-container--similar--body">
        <div className="product-container--similar--body-products">
          {displayItems.map((item) => (
            <div key={item.id}>
              <Link to={`/${item.id}`}>
                <img src={item.img[0]} alt={item.name} />
                {item.hasOffer ? (
                  // If there is a offer this part is rendering
                  <span>
                    <span>
                      <p className="has-offer-name">{item.name}</p>{" "}
                      <p
                        className={`${
                          item.isStock ? "in" : "out"
                        } has-offer-stock-status`}
                      >
                        {item.isStock ? "In-stock" : "Out of stock"}
                      </p>
                    </span>
                    <span className="has-offer-price">
                      <p className="has-offer-price-old">LKR {item.price}</p>
                      <p className="has-offer-price-new">
                        LKR {item.offerPrice}
                      </p>
                    </span>
                  </span>
                ) : (
                  // If there isn't a offer this part is rendering

                  <span>
                    <span>
                      <p className="has-no-offer-name">{item.name}</p>
                      <p className="has-no-offer-price">LKR {item.price}</p>
                    </span>
                    <p
                      className={`${
                        item.isStock ? "in" : "out"
                      } has-no-offer-stock-status`}
                    >
                      {item.isStock ? "In-stock" : "Out of stock"}
                    </p>
                  </span>
                )}
              </Link>{" "}
            </div>
          ))}
        </div>
        <div className="product-container--similar--body-category">
          <div className="product-container--similar--body-category--head">
            <h1>Categories</h1>
          </div>
          <div className="product-container--similar--body-category--body">
            {/* <Link to="/jewellery">
              <p onClick={() => setSelectedCategoryInJwellery("rings")}>
                Rings
              </p>
            </Link>
            <Link to="/jewellery">
              {" "}
              <p onClick={() => setSelectedCategoryInJwellery("earrings")}>
                Earrings
              </p>
            </Link>{" "}
            <Link to="/jewellery">
              <p onClick={() => setSelectedCategoryInJwellery("bracelets")}>
                Bracelets
              </p>
            </Link>
            <Link to="/jewellery">
              <p onClick={() => setSelectedCategoryInJwellery("chains")}>
                Chains
              </p>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSimilar;
