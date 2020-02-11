import React from "react";
import Home from "../../Pages/Home/Home";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Contact from "../../Pages/Contact/Contact";
import { Route, Switch } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Layout;
