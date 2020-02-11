import React from "react";
import "../../../Style/Main.css";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="Nav">
      <NavLink exact to="/">
        HOME
      </NavLink>
      <NavLink to="/portfolio">PORTFOLIO</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </nav>
  );
}
