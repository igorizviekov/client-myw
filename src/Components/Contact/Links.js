import React, { Fragment } from 'react';
import Animation from '../UI/AnimationTracking';
export default function Links() {
  return (
    <Fragment>
      <div className="Touch">
        <Animation>
          <h1>Follow me on social</h1>
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
    </Fragment>
  );
}
