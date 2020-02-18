import React, { useState } from "react";
import "../../../Style/Main.css";
import { NavLink } from "react-router-dom";
import useScroll from "./useScroll";
export default function Nav() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 20;
  const TIMEOUT_DELAY = 300;

  useScroll(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    setShouldShowShadow(currentScrollTop > 2);
    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "ShadowScroll" : "";
  const hiddenStyle = shouldHideHeader ? "Hidden" : "";

  return (
    <nav className={`Nav ${shadowStyle} ${hiddenStyle}`}>
      <NavLink exact to="/">
        HOME
      </NavLink>
      <NavLink to="/portfolio">PORTFOLIO</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </nav>
  );
}
