import React from "react";
import Card from "./Card";

const Index = () => {
  return (
    <div className="row d-rtl" id="discount">
      <div className="col-md-4 ">
        <div className="h-80 faj">
          <div className="h-40 faj bg-p f-1 rounded ">تخفیفات</div>
        </div>
        <Card
          imagePath={"./assets/image/cake/dokh.png"}
          bg={"bg-b"}
          price={"390,000"}
          name={"شاخدار"}
          descrip={"با طعم وانیل"}
        />
      </div>

      <div className="col-md-4 ">
        <div className="h-40 d-none d-md-block"></div>
        <Card
          imagePath={"./assets/image/cake/love.png"}
          bg={"bg-r"}
          price={"170,000"}
          name={"عاشقانه"}
          descrip={"با طعم شکلات"}
        />
      </div>

      <div className="col-md-4 ">
        <Card
          imagePath={"./assets/image/cake/sadeh.png"}
          bg={"bg-s"}
          price={"250,000"}
          name={"ساده"}
          descrip={"با طعم نوتلا"}
        />
      </div>
    </div>
  );
};

export default Index;
