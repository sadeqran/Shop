import React from "react";
import Option from "./Option";
import { useProducts } from "../context/productsContext";

const Gallery = () => {
  const products = useProducts();

  const sortedProducts = products.slice().sort((a, b) => b.score - a.score);

  const topProducts = sortedProducts.slice(0, 5);

  return (
    <div className="gallery faj">
      <div className="options">
        {topProducts.map((option) => (
          <Option key={option.id} {...option} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
