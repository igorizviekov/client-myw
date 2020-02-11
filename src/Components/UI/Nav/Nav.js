import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <NavLink exact to="/">
        HOME
      </NavLink>
      <NavLink to="/portfolio">PORTFOLIO</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </nav>
  );
}
