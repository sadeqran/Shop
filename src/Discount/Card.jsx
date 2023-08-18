import React from "react";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";

const Insta = ({ bg, imagePath, price, name, descrip }) => {
  return (
    <div className="cardIn faj">
      <FrontFace bg={bg} imagePath={imagePath} price={price} />
      <BackFace
        bg={bg}
        imagePath={imagePath}
        price={price}
        name={name}
        descrip={descrip}
      />
    </div>
  );
};

export default Insta;
