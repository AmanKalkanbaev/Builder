import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <a>Contacts</a> 
      <br/>
      <a>Log in</a>
    </div>
  );
}

export default Nav;