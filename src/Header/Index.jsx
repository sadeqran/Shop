import React from "react";
import Navbar from "./Navbar";
import Text from "./Text";
import Carousel from "./Carousel";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Carousel />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 faj h-390">
          <Text />
        </div>
      </div>
    </div>
  );
};

export default Index;
