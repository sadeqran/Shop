import React from 'react';

const Slide = ({imagePath}) => {
    return (
        <div className="slide faj">
            <img
              src={imagePath}
              height="100"
              width="100"
              alt="/"
            />
          </div>
    );
}

export default Slide;
