import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ key, to, name, icon }) => {
  return (
    <>
      <li key={key}>
        <Link to={to}>
          <div className="menu-icon">{icon}</div>
          <span>{name}</span>
        </Link>
      </li>
    </>
  );
};

export default SidebarItem;
