import SatelliteControl from "./SatelliteControl/SatelliteControl";
import Button from "../../UI/Button/Button";

import classes from "./SatelliteControls.module.css";

const SatelliteControls = ({ satellites, addSatellite, removeSatellite, canBuy, setIsBuying, price}) => {
  const results = [];
  for (const satellite in satellites) {
    results.push(<SatelliteControl
        key={satellite}
        add={addSatellite}
        remove={removeSatellite}
        type={satellite} />)
  }

  return (
    <div className={classes.SatelliteControls}>
      <strong>Satellites</strong>
      {results}
      <div className={classes.order}>
        <div className={classes.price}>
          Total price:  <span> $ {price.toFixed(0)} M </span>
        </div>
        <Button onClick={() => setIsBuying(true)} disabled={!canBuy}>Order</Button>
      </div>
    </div>
  );
}

export default SatelliteControls;