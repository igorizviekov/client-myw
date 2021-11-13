import React from 'react';

export default function BackgroundAnimation(props) {
  return (
    <div className="container container-bottom About">
      {props.children}
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="layer"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#layer" x="-40" y="-20" fill="#3D0B98" />
          <use xlinkHref="#layer" x="0" y="-10" fill="#350B84" />
          <use xlinkHref="#layer" x="-70" y="-4" fill="#440DAB" />
          <use xlinkHref="#layer" x="-50" y="7" fill="#4B0DBF" />
        </g>
      </svg>
    </div>
  );
}
