import classes from "./Satellites.module.css";

const Satellites = ({ type }) => {
  const types = {
    comunication: { backgroundColor: "red", width: "35px", height: "35px" },
    military: { backgroundColor: "yellow", width: "35px", height: "35px" },
    astronomical: { backgroundColor: "blue", width: "35px", height: "35px" },
  };


  function getPosition(satelliteWidth) {
    const planetDiameter = 250;
    const planetRadius = planetDiameter / 2;
    const satelliteRadius = parseInt(satelliteWidth) / 2;

    const satelliteTop = Math.round(Math.random() * planetDiameter);
    const satelliteLeft = Math.round(Math.random() * planetDiameter);

    const distance = Math.sqrt(
      Math.pow(satelliteTop - planetRadius, 2) + Math.pow(satelliteLeft - planetRadius, 2)
    ) + satelliteRadius;

    return distance < planetRadius
      ? {
        top: satelliteTop - satelliteRadius,
        left: satelliteLeft - satelliteRadius
      }
      : getPosition(satelliteWidth);
  }

  // Get random position for this ingredient.
  const position = getPosition(types[type].width);
  types[type].top = position.top + "px";
  types[type].left = position.left + "px";
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;




  return (
    <div className={classes.Satellites} style={types[type]}></div>
  );
}

export default Satellites;