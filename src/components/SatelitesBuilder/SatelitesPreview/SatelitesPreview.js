import classes from "./SatelitesPreview.module.css";
import map from "./map.png"

const SatelitesPreview = () => {
  
    return (
      <div className={classes.SatelitesPreview}>
          <img src={map}/>
      </div>
    );
  }
   
  export default SatelitesPreview;