import React from "react";
import { Link } from "react-router-dom";
const SideBar = ({ options }) => {
  return (
    <nav className="nav">
      {options ? (
        options.map(({ name, to }) => {
          return (
            <Link className="nav_item" to={`${to}`}>
              {name}
            </Link>
          );
        })
      ) : (
        <div>No se encontró ninguna opción en el menu </div>
      )}
    </nav>
  );
};

export default SideBar;
