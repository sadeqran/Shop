import React from "react";
import Leftnav from "./leftnav";
import RightNav from "./rightNav";

const Navbar = () => {
  return (
    <div className="container-fluid">
        <Leftnav />
        <div className="row h-50">
          <div className="col-lg-6 bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente tenetur blanditiis est molestiae laboriosam sit magnam officiis! Aut, voluptatum libero maxime consectetur ad velit! Id libero debitis quas provident?</div>
          <div className="col-lg-6 carouselTop "><RightNav /></div>
        </div>
        
    </div>
  );
};

export default Navbar;
