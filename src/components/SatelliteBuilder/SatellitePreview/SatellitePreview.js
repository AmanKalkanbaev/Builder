import Satellite from "../Satellites/Satellites";
import planet from "../../../images/00013.mp4"

import classes from "./SatellitePreview.module.css";

const SatellitePreview = ({ satellites }) => {

  const result = [];

  for (const satellite in satellites) {

    for (let i = 0; i < satellites[satellite]; i++) {

      result.push(<Satellite key={satellite + i} type={satellite} />)

    }

  }

  // let num = 6;
  // let wrap = 600;
  // let radius = 550;

  // result.ready(function() {
  //   for (let i=0;i<num; i++){
  //     let f = 2 / num * i * Math.PI;  // Рассчитываем угол каждой картинки в радианах
  //     let left = wrap + radius * Math.sin(f) + 'px';
  //     let top = wrap + radius * Math.cos(f) + 'px';
  //     result.div.eq(i).css({'top':top,'left':left}); // Устанавливаем значения каждой картинке
  //   }
  // });

  

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

        {result}

      </div>

    </div>
  );
}


export default SatellitePreview;