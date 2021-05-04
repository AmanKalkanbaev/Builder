// import Satellite from "../../Satellites/Satellites";
import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";

import classes from "./SatelliteControl.module.css";

const SatelliteControl = ({ type, count }) => {

  const dispatch = useDispatch();

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

        <Button className={classes.more} onClick={() => dispatch({type:"ADD_SATELLITE", satellite: type})}>
            +
        </Button>

        <div className={classes.satellite}>

          {names[type]}

        </div>

        <Button className={classes.less} disabled={!count} onClick={() => dispatch({type:"ADD_SATELLITE", satellite: type})}>
            -
        </Button>

      </div>

    </div>
  );
}

export default SatelliteControl;