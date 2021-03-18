
import classes from "./DrawerToggle.module.css";

const DrawerToggle = ({setdDrawerOpen}) => {
    return (
        <div className={classes.DrawerToggle} onClick={() => setDrawerOpen(true)}>
            
        </div>
    );
}

export default DrawerToggle;