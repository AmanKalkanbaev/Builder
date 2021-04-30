import SatellitePreview from "./SatellitePreview/SatellitePreview";
import PizzaControls from "./SatelliteControls/SatelliteControls";
import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import Button from"../UI/Button/Button";
import classes from "./SatelliteBuilder.module.css";
import axios from "axios";

const SatelliteBuilder = ({history}) => {
  const prices = {
    Astronomical: 64,
    Comunication: 25,
    Medical: 77,
    Meteorological: 96,
    Military: 51,
    Navigational: 23,
    Television: 15
  };
  const [satellites, setSatellites] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(loadDefaults, []);


  const [canBuy, setCanBuy] = useState(true);


  

  function checkCanBuy(newSatellites) {
    const totalSatellites = Object.values(newSatellites)
      .reduce((total, current) => total + current);
    setCanBuy(totalSatellites > 0);
  }

  function loadDefaults() {
    axios
      .get('https://builder-test-9feed-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);
  
        
        setSatellites(response.data.satellites);
      });
  }

  const [isBuying, setIsBuying] = useState(false);
  useEffect(() => {
    axios.get('https://builder-test-9feed-default-rtdb.firebaseio.com/default.json')
    .then(response => {
      setSatellites(response.data.satellites);
      setPrice(response.data.price);
    })
  },[])


  function addSatellite(type) {
    const newSatellites = { ...satellites };
    newSatellites[type]++;
    checkCanBuy(newSatellites);
    setPrice(price + prices[type]);
    setSatellites(newSatellites);
  }

  function removeSatellite(type) {
    if (satellites[type]) {
      const newSatellites = { ...satellites };
      newSatellites[type]--;
      checkCanBuy(newSatellites);
      setPrice(price - prices[type]);
      setSatellites(newSatellites);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }
  
  function stopOrdering() {
    setOrdering(false);
  }


  function finishOrdering() {
    axios
    .post('https://builder-test-9feed-default-rtdb.firebaseio.com/orders.json', {
      satellites: satellites,
      price: price,
      address: "28.08.2004",
      phone: "0 552 955 915",
      name: "Alinur.Abdyiskakov.Kubatbecovech",
    })
    .then(() => {
      setOrdering(false);
      loadDefaults();
      history.push('/checkout');
    });
  }

  return (
    <div className={classes.SatelliteBuilder}>
      <Modal show={ordering}>
        show={ordering}
        cancel={stopOrdering}
        <Button onClick={finishOrdering} >Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
        <OrderSummary satellites={satellites} price={price} />
      </Modal>


      




      <SatellitePreview
        satellites={satellites}
        price={price} />
      <PizzaControls
        startOrdering={startOrdering}
        setIsBuying={setIsBuying}
        canBuy={canBuy}
        satellites={satellites}
        addSatellite={addSatellite}
        removeSatellite={removeSatellite}
        price={price}
        />
    </div>
  );
}

export default SatelliteBuilder;




