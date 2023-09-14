import React from "react";

const SidebarItem = ({ icon, title }) => {
  return (
    <li className="sidebar_item">
      <a href="/">
        <span className="icon">
          <i className={icon}></i>
        </span>
        <span className="title">{title}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
