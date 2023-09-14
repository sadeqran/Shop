import React from "react";

const Com = ({ color, way, title, id, link }) => {
  return (
    <>
      <div
        className="col-4"
        title={title}
        style={{
          "--defaultBackground": `var(--${color})`,
        }}
      >
        <a href={link} className="acomimg">
          <img
            className="comimg"
            src={`./assets/image/com/${way}`}
            alt=""
            width={"100px"}
          />

          <h5 className="mt-2 idcss">{id}</h5>
        </a>
      </div>
    </>
  );
};

export default Com;
