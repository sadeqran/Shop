import React from "react";

const Insta = ({ bg, imagePath, price, name, descrip }) => {
  return (
    <div className="cardIn faj">
      <div className="front-face faj ">
        <img className="imgcard rounded" src={imagePath} alt="/" />
        <div className={`price faj ${bg}`}>{price}</div>
      </div>

      <div className="back-face">
        <img className="imgcard rounded backimg" src={imagePath} alt="/" />
        <h2>{name}</h2>
        <p>{descrip}</p>
        <del>500,000</del>
        <span>{price}</span>
        <div className="icons">
          <i className="bi bi-telegram text-primary" title="تلگرام"></i>
          <i className="bi bi-instagram text-danger" title="اینستاگرام"></i>
          <i className="bi bi-whatsapp text-success" title="واتساپ"></i>
        </div>

        <div className={`price faj ${bg} cartBtn`}>
          <i className="bi bi-cart4 faj pr-1"></i>
          افزودن به سبد خرید
        </div>
      </div>
    </div>
  );
};

export default Insta;
