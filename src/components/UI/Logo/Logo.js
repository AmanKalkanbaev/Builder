import classes from "./Logo.module.css";
import logo from "../../../images/spacex.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Pizza project" />
      <div>Simulator</div>
    </div>
  );
}

export default Logo;