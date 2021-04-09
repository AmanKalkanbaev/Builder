import Satellite from "../Satellites/Satellites";
import Map from "../../../images/map.png";

import classes from "./SatellitePreview.module.css";

const SatellitePreview = ({ satellites, price }) => {
  const result = [];
  for (const satellite in satellites) {
    for (let i = 0; i < satellites[satellite]; i++) {
      result.push(<Satellite key={satellite + i} type={satellite} />)
    }
  }

  return (
    <div className={classes.SatellitePreview}>
      <div className={classes.planet}>
        <div className={classes.satellites}>
          <img src={Map} alt="WorldMap"/>
          
        </div>

      </div>
      {result}
      <div className={classes.price}>$ {price.toFixed(0)} M</div>
    </div>
  );
}

export default SatellitePreview;