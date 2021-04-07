import SatelliteControl from "./SatelliteControl/SatelliteControl";
import Button from "../../UI/Button/Button";

import classes from "./SatelliteControls.module.css";

const SatelliteControls = ({ satellites, addSatellite, removeSatellite, canBuy, setIsBuying }) => {
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
      <Button onClick={() => setIsBuying(true)} disabled={!canBuy}>Order</Button>
    </div>
  );
}

export default SatelliteControls;