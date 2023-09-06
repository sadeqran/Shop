import React from "react";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";

const Card = ({ id, name, path, price, descrip, bg }) => {
  return (
    <div className="cardIn faj">
      <FrontFace bg={bg} imagePath={path} price={price} />
      <BackFace
        id={id}
        bg={bg}
        imagePath={path}
        price={price}
        name={name}
        descrip={descrip}
      />
    </div>
  );
};

export default Card;
