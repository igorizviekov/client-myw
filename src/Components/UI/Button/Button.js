import React from "react";

export default function Button(props) {
  return (
    <button
      disabled={props.disabled}
      className="Button"
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
}
