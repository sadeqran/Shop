import React from "react";

const Contact = ({ name, icon }) => {
  return (
    <p>
      <i className={`fas fa-${icon} ml-3`}></i> {name}
    </p>
  );
};

export default Contact;
