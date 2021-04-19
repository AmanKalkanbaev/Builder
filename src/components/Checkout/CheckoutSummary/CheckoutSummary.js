import SatellitePreview from "../../SatelliteBuilder/SatellitePreview/SatellitePreview";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";


const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <SatellitePreview satellites={{
          Astronomical: 5,
          Comunication: 1,
          Medical: 2,
          Meteorological: 3,
          Military: 5,
          Navigational: 2,
          Television: 1,
        }} price={65} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;