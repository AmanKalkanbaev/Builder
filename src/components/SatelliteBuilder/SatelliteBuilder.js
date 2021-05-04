import SatellitePreview from "./SatellitePreview/SatellitePreview";
import PizzaControls from "./SatelliteControls/SatelliteControls";
import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import Button from"../UI/Button/Button";
import axios from "axios";

import classes from "./SatelliteBuilder.module.css";
import { useSelector } from "react-redux";

const SatelliteBuilder = ({history}) => {
  



  const satellites = useSelector(state => state.satellites);
  const price = useSelector(state => state.price);
  const [ordering, setOrdering] = useState(false);

  // useEffect(loadDefaults, []);


  const [canBuy, setCanBuy] = useState(true);


  

  function checkCanBuy(newSatellites) {
    const totalSatellites = Object.values(newSatellites)
      .reduce((total, current) => total + current);
    setCanBuy(totalSatellites > 0);
  }


  

  function startOrdering() {
    setOrdering(true);
  }
  
  function stopOrdering() {
    setOrdering(false);
  }


  function finishOrdering() {
    setOrdering(false);
      // loadDefaults();
    history.push('/checkout');
  }

  return (
    <div className={classes.SatelliteBuilder}>
      <Modal show={ordering} cancel={stopOrdering}>
        
        <Button onClick={finishOrdering} >Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
        <OrderSummary satellites={satellites} price={price} />
      </Modal>


      




      <SatellitePreview
        satellites={satellites}
        price={price}
      />

      <PizzaControls
        startOrdering={startOrdering}
        canBuy={canBuy}
        satellites={satellites}
        price={price}
      />
    </div>
  );
}

export default SatelliteBuilder;




