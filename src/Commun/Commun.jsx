import React from "react";
import Com from "./Com";

const Commun = () => {
  return (
    <div className="row commun d-rtl">
      <Com
        color={"blue"}
        way={"tel.jpg"}
        title={"تلگرام"}
        id={"sadeqran"}
      />
      <Com
        color={"red"}
        way={"ins.jpg"}
        title={"اینستاگرام"}
        id={"sadeqran"}
      />
      <Com
        color={"green"}
        way={"what.jpg"}
        title={"واتساپ"}
        id={"09358676598"}
      />
    </div>
  );
};

export default Commun;
