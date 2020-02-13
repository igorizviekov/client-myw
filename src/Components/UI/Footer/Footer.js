import React, { Fragment } from "react";
import { useSpring } from "react-spring";
import { ReactComponent as Arrow } from "../../../Assets/Arrow.svg";
import { ReactComponent as Dribble } from "../../../Assets/Dribbble.svg";
import { ReactComponent as Facebook } from "../../../Assets/Facebook.svg";
import { ReactComponent as LinkedIn } from "../../../Assets/LinkedIn.svg";
import { ReactComponent as Instagram } from "../../../Assets/Instagram.svg";
import { ReactComponent as GitHub } from "../../../Assets/GitHub.svg";
export default function Footer() {
  const [, setY] = useSpring(() => ({ y: 0 }));
  return (
    <Fragment>
      <button
        className="Scroll"
        onClick={() => {
          setY({
            y: 0,
            reset: true,
            from: { y: window.scrollY },
            onFrame: props => window.scroll(0, props.y)
          });
        }}
      >
        <Arrow />
      </button>

      <footer className="Footer">
        <li>
          <a
            href="https://dribbble.com/igorizviekov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Dribble />
          </a>
          <a
            href="https://www.facebook.com/igorizviekov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.linkedin.com/in/igorizviekov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.instagram.com/igorizviekov/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://github.com/igorizviekov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </li>
        <p>IGOR IZVIEKOV 2020</p>
      </footer>
    </Fragment>
  );
}
