import Satellites from "../Satellites/Satellites";
import map from "./map.png"

import classes from "./SatellitesPreview.module.css";

const SatellitesPreview = ({satellites}) => {
  const result = [];
  for (const satellite in satellites) {
    for (let i = 0; i < satellites[satellite]; i++) {
      result.push(<Satellites key={satellite + i} type={satellite} />)
    }
  }
  
  return (
    <div className={classes.SatellitesPreview}>
        <img src={map} alt="WorldMap"/>
        {result}
    </div>
  );
}
   
  export default SatellitesPreview;