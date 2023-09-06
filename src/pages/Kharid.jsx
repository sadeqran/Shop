import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProducts } from "../context/productsContext";

const Kharid = () => {
  const { productId } = useParams();
  const products = useProducts();
  const product = products.find((p) => p.id === parseInt(productId));

  const relatedProducts = products.filter((p) => p.id !== parseInt(productId));

  const suggestedProducts = relatedProducts.slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [suggestedProducts]);

  if (!product) {
    return (
      <h5 className="d-rtl faj nothing">محصولی با این شناسه یافت نشد...</h5>
    );
  }

  return (
    <div>
      <div className="kharid row">

        <div className="col-md-4 faj mb-2">
          <div className="toolIcons">
            <div className="li faj">
              <i
                className="fas fa-cake-candles blue p-2"
                title="محصولات مرتبط"
              ></i>
              <a href="/">محصولات مرتبط</a>
            </div>
            <div className="li faj">
              <i className="fas fa-t red p-2" title="نوشته روی کیک"></i>
              <a href="/">نوشته روی کیک</a>
            </div>
            <div className="li faj">
              <i className="fas fa-gift green p-2" title="کادو"></i>
              <a href="/">کادو</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 faj col-sm-6">
          <img className="kharidImg" src={product.path} alt="/" width={"390"} />
        </div>
        
        <div className="col-md-4 faj flex-column col-sm-6">
          <div className="proInfo">
            <h1>{product.name}</h1>
            <h3>{product.descrip}</h3>
            <h5>{product.price}</h5>
            <NavLink to={`/checkout/${productId}`}>
              <button className="pardakht bxshadow">پرداخت</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="suggests faj">
        {suggestedProducts.map((suggestedProduct) => (
          <NavLink
            key={suggestedProduct.id}
            to={`/kharid/${suggestedProduct.id}`}
            className="suggests"
          >
            <img className="sugImg" src={suggestedProduct.path} alt="" />
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Kharid;
