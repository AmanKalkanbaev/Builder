import Satellite from "../Satellites/Satellites";
import planet from "../../../images/00013.mp4"

import classes from "./SatellitePreview.module.css";

const SatellitePreview = ({ satellites }) => {

  const result = [];

  for (const satellite in satellites) {

    for (let i = 0; i < satellites[satellite]; i++) {

      result.push(<Satellite  key={satellite + i} type={satellite}/>)

    }

  }



  return (
    <div className={classes.SatellitePreview}>

      <video
        preload="auto"
        autoPlay={true}
        loop={true}
        muted="muted"
        src={planet}
        className={classes.video}
      />

      <div className={classes.results} >

        <div className={classes.satellite}>
          {result}
        </div>

      </div>

    </div>
  );
}


export default SatellitePreview;