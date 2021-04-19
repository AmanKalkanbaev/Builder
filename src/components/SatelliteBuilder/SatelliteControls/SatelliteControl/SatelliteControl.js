// import Satellite from "../../Satellites/Satellites";
import Button from "../../../UI/Button/Button";

import classes from "./SatelliteControl.module.css";

const SatelliteControl = ({ type, add, remove }) => {
  const names = {
    Astronomical: "Astronomical",
    Comunication: "Comunication",
    Medical: "Medical",
    Meteorological: "Meteorological",
    Military: "Military",
    Navigational: "Navigational",
    Television: "Television"
  }
  return (
    <div className={classes.SatelliteControl}>
      <div className={classes.ControlLine}>
        <Button className={classes.more} onClick={() => add(type)}>+</Button>
        <div className={classes.satellite}>
          {/* <Satellite type={type} fixed /> */}
          {names[type]}
        </div>
        <Button className={classes.less} onClick={() => remove(type)}>-</Button>
      </div>
    </div>
  );
}

export default SatelliteControl;