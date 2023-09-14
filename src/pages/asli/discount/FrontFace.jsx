import React from 'react';

const FrontFace = ({ bg, imagePath, price }) => {
    return (
        <div className="front-face faj ">
        <img className="imgcard rounded" src={imagePath} alt="/" />
        <div className={`price faj ${bg}`}>{price}</div>
      </div>

    );
}

export default FrontFace;
