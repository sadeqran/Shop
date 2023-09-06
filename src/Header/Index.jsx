import React from "react";
import Text from "./Text";
import Carousel from "./Carousel";

const Index = () => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <Carousel />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 faj h-325">
        <Text />
      </div>
    </div>
  );
};

export default Index;
