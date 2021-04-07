import React from "react";
import astronomicalBackground from "../../../images/astronomical.svg";
import comunicationBackground from "../../../images/comunication.svg";
import medicalBackground from "../../../images/medical.svg";
import meteorologicalBackground from "../../../images/meteorological.svg";
import militaryBackground from "../../../images/military.svg";
import navigationalBackground from "../../../images/navigational.svg";
import televisionBackground from "../../../images/television.svg";

import classes from "./Satellites.module.css";

const Satellites = ({ type, fixed }) => {
  const types = {
    astronomical: { backgroundImage: `url(${astronomicalBackground})`, width: "45px", height: "45px" },
    comunication: { backgroundImage: `url(${comunicationBackground})`, width: "45px", height: "45px" },
    medical: { backgroundImage: `url(${medicalBackground})`, width: "45px", height: "45px" },
    meteorological: { backgroundImage: `url(${meteorologicalBackground})`, width: "45px", height: "45px" },
    military: { backgroundImage: `url(${militaryBackground})`, width: "45px", height: "45px" },
    navigational: { backgroundImage: `url(${navigationalBackground})`, width: "45px", height: "45px" },
    television: { backgroundImage: `url(${televisionBackground})`, width: "45px", height: "45px" },
  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 380;
    const pizzaRadius = pizzaDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    ) + ingredientRadius;

    return distance < pizzaRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  // if (!fixed) {
  //   const position = getPosition(types[type].width);
  //   types[type].top = position.top + "px";
  //   types[type].left = position.left + "px";
  // }

  return (
    <div className={classes.Satellites} style={types[type]}></div>
  );
}

export default React.memo(Satellites);