import spacex from './spacex.svg';
import classes from "./Logo.module.css";

const Logo = ({ children }) => {
    return (
        <div className={classes.spacex}>
           <img src={spacex}/>
           <span>Simulator</span>
        </div>
        
    );
}

export default Logo;