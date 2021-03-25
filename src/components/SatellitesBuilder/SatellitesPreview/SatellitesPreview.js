import classes from "./SatellitesPreview.module.css";
import Satellites from "../Satellites/Satellites";
import map from "./map.png"

const SatellitesPreview = ({satellites}) => {
  const result = [];
  for (const satellite in satellites) {
    for (let i = 0; i < satellites[satellite]; i++) {
      result.push(<Satellites type={satellite} />)
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