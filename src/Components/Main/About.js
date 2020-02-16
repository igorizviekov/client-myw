import React from "react";
import Button from "../UI/Button/Button";
import { useHistory } from "react-router-dom";
import Animation from "../UI/AnimationTracking";
const About = props => {
  const history = useHistory();
  const contactButton = () => {
    history.push("/contact");
  };

  return (
    <div className="About">
      <Animation>
        <h1>About me</h1>
      </Animation>
      <p>I am always up to meet new people, learn new things and travel.</p>
      <p>
        For the past 10 years I’ve lived and worked in 5 different countries in
        Europe, the Middle East, North America and Asia.
      </p>
      <p>
        In 2019, I tried how to code, and since then it has become a part of my
        daily routine.
      </p>
      <br />
      <Button clicked={contactButton}>CONTACT</Button>
    </div>
  );
};
export default About;
