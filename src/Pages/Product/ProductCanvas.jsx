import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductSimilar from "./ProductSimilar";
import { items } from "../../Constant";
import { CategoryContext } from "../../CategoryProvider";
import { back } from "../../assets";

function ProductCanvas(props) {
  const { selectedCategoryInJewellery, setSelectedCategoryInJewellery } =
    useContext(CategoryContext);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0); 
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = items.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  return (
    <div className="product-container">
      <Link to=".." relative="path">
        <div className="product-container--go-back">
          <img src={back} alt="" />
          <p>Go Back</p>
        </div>
      </Link>
      <div>
        {product ? (
          <ProductDetails product={product} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
        ) : (
          <p>Product not found</p>
        )}
      </div>
      <div>
        {" "}
        {product ? (
          <ProductSimilar
            product={product}
            setSelectedImage={setSelectedImage}
            setSelectedCategoryInJewellery={setSelectedCategoryInJewellery}
          />
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
}

export default ProductCanvas;
