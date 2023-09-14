import React from "react";
import { NavLink } from "react-router-dom";

const handleClick = (event) => {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => option.classList.remove("active"));
  event.currentTarget.classList.add("active");
};

const Option = ({ id,icon, name, descrip, path, active}) => {
  return (
    <div
      className={`option ${active ? "active" : ""}`}
      onClick={handleClick}
      style={{
        "--optionBackground": `url(${path})`,
      }}
    >
      <div className="shadow"></div>
      <div className="label">
        <div className="icon">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <div className="space">
          <div className="info">
            <div className="main">{name}</div>
            <div className="sub">{descrip}</div>
          </div>
          <NavLink to={`/kharid/${id}`}>
            <button className="addcart">
              <i className="fas fa-plus "></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Option;
