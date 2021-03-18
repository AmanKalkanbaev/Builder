import Drawer from "./Drawer/Drawer";
import Toolbar from "./Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div className={classes.Layout}>
            <Toolbar setdrawerOpen={setDrawerOpen} />
            <Drawer drawerOpen={drawerOpen} />
            {children}
        </div>
    );
}

export default Layout;