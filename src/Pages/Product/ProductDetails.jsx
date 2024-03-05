import React, { useState } from "react";

function ProductDetails(props) {
  const [selectedImage, setSelectedImage] = useState(0); // Initialize selectedImage state to 0
  const product = props.product;

  // Function to handle image selection
  const handleImageSelect = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="product-container--details">
      <div className="product-container--details--image-container">
        <div className="product-container--details--image-container--unselected-images">
          {product.img.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => handleImageSelect(index)}
              style={{
                display: index === selectedImage ? "none" : "block",
              }}
            />
          ))}
        </div>
        <div className="product-container--details--image-container--selected-images">
          <img src={product.img[selectedImage]} alt="" />
        </div>
      </div>
      <div className="product-container--details--info-container">
        <div className="product-container--details--info-container--topic">
          <h1>{product.name}</h1>
        </div>
        <div className="product-container--details--info-container--category-and-availiability">
          <p>
            Category: <span>{product.type}</span>
          </p>
          <p>
            Availiability:{" "}
            <span className={product.isStock ? 'in-stock' : 'out-of-stock'}>{product.isStock ? "In-Stock" : "Out Of Stock"}</span>
          </p>
        </div>
        <div className="product-container--details--info-container--price">
          <p>
            <span>Rs.</span> <span>{product.price}</span>
            <span>.00</span>
          </p>
        </div>
        <div className="product-container--details--info-container--details">
          <p>{product.details}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
