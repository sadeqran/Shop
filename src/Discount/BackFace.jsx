import React from "react";
import { NavLink } from "react-router-dom";

const BackFace = ({ id, bg, imagePath, price, name, descrip }) => {
  return (
    <div className="back-face">
      <img className="imgcard rounded backimg" src={imagePath} alt="/" />
      <h2>{name}</h2>
      <p>{descrip}</p>
      <del>500,000</del>
      <span>{price}</span>
      <div className="icons">
        <i className="bi bi-telegram blue" title="تلگرام"></i>
        <i className="bi bi-instagram red" title="اینستاگرام"></i>
        <i className="bi bi-whatsapp green" title="واتساپ"></i>
      </div>
      <NavLink to={`/kharid/${id}`}>
        <button className={`price faj ${bg} cartBtn`}>
          <i className="bi bi-cart4 faj pr-1"></i>
          افزودن به سبد خرید
        </button>
      </NavLink>
    </div>
  );
};

export default BackFace;
