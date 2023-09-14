import React from "react";
import Header from "./header/Index";
import Services from "./serviceSlide/Services";
import Discount from "./discount/Index";
import Gallery from "./gallery/Gallery";
import Contact from "./contact/Commun";
import Footer from "./footer/Footer";

const Asli = () => {
  return (
    <div>
      <Header />
      <Services />
      <Discount />
      <div className="headline advertise">تبلیغات</div>
      <div className="headline">محصولات برتر</div>
      <Gallery />
      <div className="headline">راه های ارتباطی</div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Asli;
