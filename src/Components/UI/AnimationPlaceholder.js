import React from "react";
import Typing from "react-typing-animation";

export default function AnimationPlaceholder() {
  return (
    <div className="profilePicture">
      <Typing loop={true} hideCursor speed={100}>
        <span>Brushing my teeth.</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={19} />
        <span>Ironing my shirt.</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={18} />
        <span>Jumping into the portal.</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={24} />
        <span>Almost here!</span>
        <Typing.Delay ms={1500} />
        <Typing.Backspace count={13} />
      </Typing>
    </div>
  );
}
