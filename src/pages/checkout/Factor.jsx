import React from "react";
import { useProducts } from "../../context/productsContext";
import { useParams } from "react-router-dom";

const Factor = () => {
  const { productId } = useParams();
  const products = useProducts();
  const product = products.find((p) => p.id === parseInt(productId));

  return (
    <div className="kol">
      <div
        className="akss faj"
        style={{
          "--optionBackground": `url(${product.path})`,
        }}
      >
        <div className="dakhel faj">
          <h1>{product.name}</h1>
          <h3>{product.descrip}</h3>
          <h5>{product.price}</h5>
        </div>
      </div>
      <div className="kolchap">
        <div className="vasat faj">
          <form action="#" className="faj flex-column">
            <h1>جزییات پرداخت</h1>
            <span>خرید خود را تکمیل کنید</span>
            <input type="email" placeholder="ایمیل" />
            <input type="password" placeholder="رمز عبور" />
            <a href="/">رمز عبور خود را فراموش کرده اید؟</a>
            <button className="bxshadow">ورود</button>
          </form>
        </div>
      </div>
      <div className="kolrast">
        <div className="vasat"></div>
      </div>
    </div>
  );
};

export default Factor;
