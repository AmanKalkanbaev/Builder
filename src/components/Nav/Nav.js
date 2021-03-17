
import classes from "./Nav.module.css";

const Nav = ({ children }) => {
    return (
        <div className={classes.Nav}>
            Log in  |
            Contacts
        </div>
    );
}

export default Nav;