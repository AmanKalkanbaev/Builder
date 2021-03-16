
import classes from "./Nav.module.css";

const Nav = ({ children }) => {
    return (
        <div className={classes.Nav}>
            Pizza Builder  |
            Authentication
        </div>
    );
}

export default Nav;