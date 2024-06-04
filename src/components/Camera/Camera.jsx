import React from "react";
import "./Camera.css";

export function Camera() {
  return (
    <div className="camera">
      <div className="lens">
        <div className="innerLens">
          <div className="innerLens2"></div>
        </div>
      </div>
      <div className="flash"></div>
      <div className="button"></div>
    </div>
  );
}
