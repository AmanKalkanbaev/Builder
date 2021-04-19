import React from "react";
import astronomicalBackground from "../../../images/astronomical.svg";
import comunicationBackground from "../../../images/comunication.svg";
import medicalBackground from "../../../images/medical.svg";
import meteorologicalBackground from "../../../images/meteorological.svg";
import militaryBackground from "../../../images/military.svg";
import navigationalBackground from "../../../images/navigational.svg";
import televisionBackground from "../../../images/television.svg";

import classes from "./Satellites.module.css";

const Satellites = ({ type }) => {
  const types = {
    Astronomical: { backgroundImage: `url(${astronomicalBackground})`, width: "45px", height: "45px" },
    Comunication: { backgroundImage: `url(${comunicationBackground})`, width: "45px", height: "45px" },
    Medical: { backgroundImage: `url(${medicalBackground})`, width: "45px", height: "45px" },
    Meteorological: { backgroundImage: `url(${meteorologicalBackground})`, width: "45px", height: "45px" },
    Military: { backgroundImage: `url(${militaryBackground})`, width: "45px", height: "45px" },
    Navigational: { backgroundImage: `url(${navigationalBackground})`, width: "45px", height: "45px" },
    Television: { backgroundImage: `url(${televisionBackground})`, width: "45px", height: "45px" },
  };

  return (
    <div className={classes.Satellites} style={types[type]}></div>
  );
}

export default React.memo(Satellites);