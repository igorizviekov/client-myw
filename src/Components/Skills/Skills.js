import React, { Fragment } from "react";
import { ReactComponent as Pen } from "../../Assets/Pen.svg";
import { ReactComponent as Code } from "../../Assets/Code.svg";
import Animation from "../UI/AnimationTracking";
export default function Skills() {
  return (
    <Fragment>
      <br />
      <br />
      <Animation>
        <h1>What do I use?</h1>
      </Animation>

      <br />
      <Pen />
      <br />
      <p>Illustrator</p>
      <p>Photoshop</p>
      <p>XD</p>
      <br />
      <div className="Skills">
        <Code />
        <div className="Grid">
          <p>JavaScript</p>
          <p>HTML/CSS</p>
          <p>React</p>
          <p>FireBase</p>
          <p>Git</p>
          <p>Redux</p>
          <p>SASS</p>
          <p>GitHub</p>
          <p>Router</p>
        </div>
      </div>
      <Animation>
        <h1>What do I do?</h1>
      </Animation>
      <br />
      <div className="Skills2">
        <h2>Web Design</h2>
        <p>
          Minimalist and clean, where every stroke exists for a purpose. All
          about your website, including the content, the way it looks, and the
          way it works - I’ve got you covered.
        </p>
        <h2>Frontend Development</h2>
        <p>
          I will implement the design so the website runs smoothly in different
          browsers, different operating systems and different devices, from
          widescreen monitors to mobile phones.
        </p>
      </div>
    </Fragment>
  );
}
