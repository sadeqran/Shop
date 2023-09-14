import React from "react";

const Link = ({ name }) => {
  return (
    <p>
      <a href="/" className="text-dark">
        {name}
      </a>
    </p>
  );
};

export default Link;
