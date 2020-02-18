import React, { Fragment } from "react";
import pen from "../../Assets/Pen.svg";
import code from "../../Assets/Code.svg";
import Animation from "../UI/AnimationTracking";
export default function Skills() {
  return (
    <Fragment>
      <div className="Skills">
        <Animation>
          <h1>What do I use?</h1>
        </Animation>
        <br />
        <img src={pen} alt="Pen" />
        <br />
        <p>Illustrator</p>
        <p>Photoshop</p>
        <p>XD</p>
        <br />
        <img src={code} alt="Code" />
        <div className="Grid">
          <p>JavaScript</p>
          <p>HTML/CSS</p>
          <p>React</p>
          <p>FireBase</p>
          <p>SASS</p>
          <p>Redux</p>
          <p>Git</p>
          <p>Final Cut</p>
          <p>WebPack</p>
        </div>
      </div>
      <div className="Skills2">
        <Animation>
          <h1>What do I do?</h1>
        </Animation>
        <br />
        <div className="SkillsInfo">
          <section>
            <h2>Web Design</h2>
            <p>
              Minimalist and clean, where every stroke exists for a purpose. All
              about your website, including the content, the way it looks, and
              the way it works - I’ve got you covered.
            </p>
          </section>
          <section>
            <h2>Frontend Development</h2>
            <p>
              I will implement the design so the website runs smoothly in
              different browsers, different operating systems and different
              devices, from widescreen monitors to mobile phones.
            </p>
          </section>
        </div>
      </div>
    </Fragment>
  );
}
