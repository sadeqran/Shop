import React from "react";

const H6 = ({ name }) => {
  return (
    <div>
      <h6 className="text-uppercase fw-bold">{name}</h6>
      <hr className="hr mb-4 mt-0 d-inline-block mx-auto" />
    </div>
  );
};

export default H6;
