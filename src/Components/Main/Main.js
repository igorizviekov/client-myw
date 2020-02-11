import React from "react";
import "../../Style/Main.css";
import Logo from "./Logo";

export default function Main(props) {
  return (
    <div className="Main">
      <div className="Background" />
      <div className="Title">
        <h1>Hi!</h1>
        <h2>My name is</h2>
        <h1>Igor</h1>
      </div>
      <Logo />
      <br />
    </div>
  );
}
