import React from "react";
import Animation from "../UI/AnimationTracking";
import mockup from "../../Assets/burger.png";
import { useSpring, animated } from "react-spring";
export default function Burger() {
  const slide = useSpring({
    opacity: 1,
    marginTop: 0,
    delay: 400,
    from: {
      opacity: 0,
      marginTop: 50
    }
  });

  return (
    <div className="Portfolio">
      <Animation>
        <h1 className="Touch">My Work</h1>
      </Animation>
      <br />
      <h2>Bright Burger</h2>
      <p>My very first single page application.</p>
      <p>
        As a part of my studies I made an app in which you can make your own
        custom burger and place an order.
      </p>
      <p>
        Check it out
        <a
          href="https://brightburger-cf731.web.app/bright-burger"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
      </p>
      <animated.img src={mockup} alt="phone" style={slide} />
    </div>
  );
}
