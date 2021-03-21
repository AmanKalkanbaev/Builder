import Backdrop from "../../UI/Backdrop";
import classes from "./Drawer.module.css";
import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";

const Drawer = (open, closeDrawer) => {
    const drawerClasses = [
        classes.content,
        open ? classes.open : classes.close
      ];
    if(open){
        drawerClasses.push(classes.open);
    }
    else{
        drawerClasses.push(classes.close)
    }
    return (
        <div className={classes.Drawer}>
            <Backdrop show={open} click={closeDrawer} />
            <div className={drawerClasses.join(" ")}>
                <Logo/>
                <Nav/>
            </div>
        </div>
    );
}

export default Drawer;

