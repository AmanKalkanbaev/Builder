import spacex from './spacex.svg';
import classes from "./Logo.module.css";

const Logo = ({ children }) => {
    return (
        <div className={classes.spacex}>
           <img src={spacex} alt="SpacexLogo"/>
           <span>Simulator</span>
        </div>
        
    );
}

export default Logo;