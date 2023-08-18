import React from "react";

const handleClick = (event) => {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => option.classList.remove("active"));
  event.currentTarget.classList.add("active");
};

const Option = ({ icon, name, descrip, backUrl, active }) => {
  return (
    <div
      className={`option ${active ? "active" : ""}`}
      onClick={handleClick}
      style={{
        "--optionBackground": `url(${backUrl})`,
      }}
    >
      <div className="shadow"></div>
      <div className="label">
        <div className="icon">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <div className="info">
          <div className="main">{name}</div>
          <div className="sub">{descrip}</div>
        </div>
      </div>
    </div>
  );
};

export default Option;
