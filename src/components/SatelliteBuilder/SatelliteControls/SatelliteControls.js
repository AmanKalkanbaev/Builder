import SatelliteControl from "./SatelliteControl/SatelliteControl";
import Button from "../../UI/Button/Button";

import classes from "./SatelliteControls.module.css";

const SatelliteControls = ({ satellites, addSatellite, removeSatellite, price,startOrdering }) => {
  const results = [];

  let total = 0;


  for (const satellite in satellites) {

    total += satellites[satellite];

    results.push(<SatelliteControl

      key={satellite}
      add={addSatellite}
      remove={removeSatellite}
      count={satellites[satellite]}
      type={satellite} 

    />)
  }

  let money = "M";

  if(price >= 1000) {
    money = "B";
  }

  return (
    <div className={classes.SatelliteControls}>
      <strong>Satellites</strong>
      {results}
      <div className={classes.order}>
        <div className={classes.price}>
          Total price:  <span> $ {price.toFixed(0)} {money} </span>
        </div>
        <Button onClick={startOrdering} disabled={!total}>Order</Button>
      </div>
    </div>
  );
}

export default SatelliteControls;