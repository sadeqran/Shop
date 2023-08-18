import React from "react";
import "./services.scss";
import Slide from "./Slide";

const Services = () => {
  return (
    <div>
      <div className="slider faj">
        <div className="slide-track">
          <Slide imagePath={"./assets/image/services/ersal.jpg"} />
          <Slide imagePath={"./assets/image/services/moshavere.jpg"} />
          <Slide imagePath={"./assets/image/services/tahvil.jpg"} />
          <Slide imagePath={"./assets/image/services/zemanat.jpg"} />
          <Slide imagePath={"./assets/image/services/ersal.jpg"} />
          <Slide imagePath={"./assets/image/services/moshavere.jpg"} />
          <Slide imagePath={"./assets/image/services/tahvil.jpg"} />
          <Slide imagePath={"./assets/image/services/zemanat.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Services;
