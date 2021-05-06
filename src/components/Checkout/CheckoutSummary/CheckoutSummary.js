
import SatellitePreview from "../../SatelliteBuilder/SatellitePreview/SatellitePreview";
import CheckoutForm from "../CheckoutSummary/CheckoutForm/CheckoutForm";
import classes from "./CheckoutSummary.module.css";


const CheckoutSummary = ({ submitCallback, cancelCallback }) => {

  

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
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback}
      />
      
    </div>
  );
}
 
export default CheckoutSummary;