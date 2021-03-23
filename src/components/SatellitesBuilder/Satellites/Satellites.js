
import classes from "./Satellites.module.css";

const Satellites = ({ type }) => {

    
  return (
    <div className={classes.Satellites}>{type}</div>
  );
}

export default Satellites;