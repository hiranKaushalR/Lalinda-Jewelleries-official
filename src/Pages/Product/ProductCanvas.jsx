import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductSimilar from "./ProductSimilar";
import { items } from "../../Constant";

function ProductCanvas() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = items.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  return (
    <div className="product-container">
      <Link to="..">Back to home</Link>
      <div>
        {product ? (
          <ProductDetails product={product} />
        ) : (
          <p>Product not found</p>
        )}
      </div>
      <div>
<ProductSimilar />
      </div>
    </div>
  );
}

export default ProductCanvas;
