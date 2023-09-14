import React from "react";
import Card from "./Card";
import { useProducts } from "../../../context/productsContext";

const Index = () => {
  const products = useProducts();
  const discountedProducts = products.filter((product) => product.discounted);

  return (
    <div className="row d-rtl" id="discount">
      {discountedProducts.map((product, index) => (
        <div className={`col-md-4`} key={product.id}>
          {index === 0 && (
            <div className="h-80 faj">
              <div className="h-40 faj bg-p f-1 rounded ">تخفیفات</div>
            </div>
          )}
          {index === 1 && <div className={`h-40 d-none d-md-block`}></div>}
          <Card {...product} />
        </div>
      ))}
    </div>
  );
};

export default Index;
