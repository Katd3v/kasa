import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div className="navigation">
        <div>
          <img src="./LOGO.png" alt="Logo de Kasa" />
        </div>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
