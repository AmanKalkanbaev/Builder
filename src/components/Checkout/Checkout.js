
import axios from "axios";
import axios from "../../axios";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutSummary/CheckoutForm/CheckoutForm";
import classes from "../Checkout/Checkout.module.css";
import SatellitePreview from "../SatelliteBuilder/SatellitePreview/SatellitePreview";
import withAxios from "../withAxios";

const Checkout = ({ history }) => {

  const satellites = useSelector(state => state.builder.satellites);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('/orders.json',{
      name: data.get('name'),
      phone: data.get('phone'),
      address: data.get('address'),
      satellites: satellites,
      price: price,
    }).then(response =>{
      history.replace('/');
    })
    
    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <SatellitePreview satellites={satellites} price={price}>

      </SatellitePreview>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default withAxios(Checkout, axios);