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
    Astronomical: { backgroundImage: `url(${astronomicalBackground})` },
    Comunication: { backgroundImage: `url(${comunicationBackground})`  },
    Medical: { backgroundImage: `url(${medicalBackground})`  },
    Meteorological: { backgroundImage: `url(${meteorologicalBackground})`  },
    Military: { backgroundImage: `url(${militaryBackground})`  },
    Navigational: { backgroundImage: `url(${navigationalBackground})`  },
    Television: { backgroundImage: `url(${televisionBackground})`  },
  };

  return (
    <div className={classes.Satellites} style={types[type]}></div>
  );
}

export default React.memo(Satellites);