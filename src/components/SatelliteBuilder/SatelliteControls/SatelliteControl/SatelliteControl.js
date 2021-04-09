// import Satellite from "../../Satellites/Satellites";
import Button from "../../../UI/Button/Button";

import classes from "./SatelliteControl.module.css";

const SatelliteControl = ({ type, add, remove }) => {
  const names = {
    astronomical: "Astronomical",
    comunication: "Comunication",
    medical: "Medical",
    meteorological: "Meteorological",
    military: "Military",
    navigational: "Navigational",
    television: "Television",
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