import classes from "./SatelitesBuilder.module.css";
import SatelitesControl from "./SatelitesControl/SatelitesControl";
import SatelitesPreview from "./SatelitesPreview/SatelitesPreview";

const SatelitesBuilder = () => {
  
    return (
      <div className={classes.SatelitesBuilder}>
            <SatelitesPreview/>
            <SatelitesControl/>
      </div>
    );
  }
   
  export default SatelitesBuilder;