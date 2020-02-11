import React from "react";
import Button from "../UI/Button/Button";
import { useHistory } from "react-router-dom";
export default function About() {
  const history = useHistory();
  const contactButton = () => {
    history.push("/contact");
  };
  return (
    <div className="About">
      <h1>About me</h1>
      <p>I have a huge passion for delicious food, sports and travel.</p>
      <p>
        For the past 10 years I’ve lived and worked in 5 different countries in
        Europe, the Middle East, the USA and Asia.{" "}
      </p>
      <p>
        In 2019, I tried how to code, and since then it has become a part of my
        daily routine.
      </p>
      <br />
      <Button clicked={contactButton}>CONTACT</Button>
    </div>
  );
}
