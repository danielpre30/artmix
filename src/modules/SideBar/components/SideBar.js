import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = ({ options }) => {
  return (
    <nav>
      {options ? (
        options.map(({ name, to }) => <NavLink to={`/${to}`}></NavLink>)
      ) : (
        <div>No se encontró ninguna opción en el menu </div>
      )}
    </nav>
  );
};

export default SideBar;
