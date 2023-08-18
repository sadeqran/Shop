import React from "react";
import Option from "./Option";

const Gallery = () => {
  return (
    <div className="gallery faj">
      <div className="options">
        <Option
          icon={"1"}
          name={"خرسی"}
          descrip={"با طعم شکلات"}
          backUrl={"../image/cake/sefa.png"}
          active={true}
        />
        <Option
          icon={"2"}
          name={"مناسبتی"}
          descrip={"با طعم توت فرنگی"}
          backUrl={"../image/cake/yalda.png"}
        />
        <Option
          icon={"3"}
          name={"مردونه"}
          descrip={"با طعم نوتلا و فندق"}
          backUrl={"../image/cake/sadeh.png"}
        />
        <Option
          icon={"4"}
          name={"پسرونه"}
          descrip={"با طعم شکلات سفید"}
          backUrl={"../image/cake/pesar.png"}
        />
        <Option
          icon={"5"}
          name={"دخترونه"}
          descrip={"با طعم هفت میوه ای"}
          backUrl={"../image/cake/dokh.png"}
        />
        {/* <Option
          icon={"6"}
          name={"مینیمال"}
          descrip={"با طعم وانیل و قهوه"}
          backUrl={"../image/cake/love.png"}
        /> */}
      </div>
    </div>
  );
};

export default Gallery;
