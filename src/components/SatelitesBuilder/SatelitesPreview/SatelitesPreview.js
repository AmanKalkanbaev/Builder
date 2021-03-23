import classes from "./SatelitesPreview.module.css";
import map from "./map.png"

const SatelitesPreview = () => {
  
    return (
      <div className={classes.SatelitesPreview}>
          <img src={map} alt="WorldMap"/>
      </div>
    );
  }
   
  export default SatelitesPreview;