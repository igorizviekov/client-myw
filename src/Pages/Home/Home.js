import React from "react";
import Main from "../../Components/Main/Main";
import About from "../../Components/About/About";
import Button from "../../Components/UI/Button/Button";
import "../../Style/Main.css";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();
  const portfolioButton = () => {
    history.push("/portfolio");
  };
  return (
    <div className="Home">
      <Main />
      <Button clicked={portfolioButton}>PORTFOLIO</Button>
      <About />
    </div>
  );
}
