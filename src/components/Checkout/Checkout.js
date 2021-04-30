import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"
import axios from "axios";

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const order = {
      name: data.get('name'),
      phone: data.get('phone'),
      address: data.get('address'),
      Satellites:{
        Astronomical: 1,
        Comunication:1,
        Medical:1,
        Meteorological:1,
        Military: 1,
        Navigational:1,
        Television:1,
      }
    }
    axios.post('https://builder-test-9feed-default-rtdb.firebaseio.com/orders.json',order)
    .then(response =>{
      history.replace('/');
    })

    console.log(order)
  }

  return (
    <div>
      <CheckoutSummary
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default Checkout;