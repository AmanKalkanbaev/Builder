import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <NavItem url="/" exact>Builder</NavItem>
      <NavItem url="/orders">Order</NavItem>
    </div>
  );
}

export default Nav;