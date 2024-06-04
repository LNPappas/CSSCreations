import React from "react";

import Batman from "../Batman";
import Camera from "../Camera";
import CoffeeMug from "../CoffeeMug";
import Diamond from "../Diamond";
import HeartEnvelope from "../HeartEnvelope";
import PepsiLogo from "../PepsiLogo";

import "./Drawings.css";

export function Drawings() {
  return (
    <>
      <h1 className="drawings-header">Drawings:</h1>
      <div className="drawings-container">
        <div className="drawing-item">
          <Diamond />
        </div>
        <div className="drawing-item">
          <Camera />
        </div>
        <div className="drawing-item">
          <HeartEnvelope />
        </div>
        <div className="drawing-item">
          <PepsiLogo />
        </div>
        <div className="drawing-item">
          <CoffeeMug />
        </div>
        <div className="drawing-item">
          <Batman />
        </div>
      </div>
    </>
  );
}
