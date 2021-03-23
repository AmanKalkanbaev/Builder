import classes from "./SatellitesBuilder.module.css";
import SatellitesControl from "./SatellitesControl/SatellitesControl";
import SatellitesPreview from "./SatellitesPreview/SatellitesPreview";

const SatellitesBuilder = () => {
  const satellites = {
    comunication: 1,
    military: 1,
    astronomical: 1,
    disco: 1,
    snoopdog: 1,
  }
  
    return (
      <div className={classes.SatellitesBuilder}>
            <SatellitesPreview satellites={satellites} />
            <SatellitesControl/>
      </div>
    );
  }
   
  export default SatellitesBuilder;