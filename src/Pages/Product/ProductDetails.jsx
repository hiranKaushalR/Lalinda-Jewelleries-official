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
        <h1>{product.name}</h1>
        <div>
              
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
