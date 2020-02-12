import React, { Fragment } from "react";
import Typing from "react-typing-animation";
import TrackVisibility from "react-on-screen";
export default function Animation(props) {
  return (
    <Fragment>
      <TrackVisibility once partialVisibility>
        {({ isVisible }) =>
          isVisible ? (
            <Typing hideCursor speed={100}>
              {props.children}
            </Typing>
          ) : null
        }
      </TrackVisibility>
    </Fragment>
  );
}
