import React from "react";

export default function Button(props) {
  return (
    <button className="Button" onClick={props.clicked}>
      {props.children}
    </button>
  );
}
