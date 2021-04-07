import Satellite from "../../Satellites/Satellites";
import Button from "../../../UI/Button/Button";

import classes from "./SatelliteControl.module.css";

const SatelliteControl = ({ type, add, remove }) => {
  return (
    <div className={classes.SatelliteControl}>
      <Button className={classes.more} onClick={() => add(type)}>+</Button>
      <div className={classes.satellite}>
        <Satellite type={type} fixed />
      </div>
      <Button className={classes.less} onClick={() => remove(type)}>-</Button>
    </div>
  );
}

export default SatelliteControl;