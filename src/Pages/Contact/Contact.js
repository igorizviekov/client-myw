import React, { Fragment } from "react";
import Animation from "../../Components/UI/AnimationTracking";
import Form from "../../Containers/Form/Form";
export default function Contact() {
  return (
    <Fragment>
      <div className="Touch">
        <Animation>
          <h1>Let`s stay in touch </h1>
        </Animation>
      </div>
      <li className="Contact">
        <a
          href="https://www.facebook.com/igorizviekov"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/igorizviekov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/igorizviekov/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://github.com/igorizviekov"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dribbble.com/igorizviekov"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </a>
      </li>
      <h1>Fill the form</h1>
      <h2>It`s easy</h2>
      <div className="Form-section">
        <Form />
      </div>
    </Fragment>
  );
}
