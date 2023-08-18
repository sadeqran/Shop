import React from "react";

const Com = ({ color, way, title, id }) => {
  return (
    <div
      className="col-4 faj flex-column"
      title={title}
      style={{
        "--defaultBackground": `var(--${color})`,
      }}
    >
      <img
        className="comimg"
        src={`./assets/image/com/${way}`}
        alt=""
        width={"100px"}
      />
      <h5 className="mt-2 hcos">{id}</h5>
    </div>
  );
};

export default Com;
