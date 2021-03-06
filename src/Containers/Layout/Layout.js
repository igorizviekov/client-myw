import React from "react";
import Nav from "../../Components/UI/Nav/Nav";
import Footer from "../../Components/UI/Footer/Footer";
import Home from "../../Pages/Home";
import Portfolio from "../../Pages/Portfolio";
import Contact from "../../Pages/Contact";
import { Route, Switch } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Layout;
