import React from "react";
import DojoKun from "./DojoKun";
import DojoRules from "./DojoRules";

import "./DojoInfo.css";



const DojoInfo = () => {
  return (
    <div className="dojo-info-container">
      <div className="dojo-info-layout">
        <DojoKun />

        <DojoRules />
      </div>
    </div>
  );
};

export default DojoInfo;
