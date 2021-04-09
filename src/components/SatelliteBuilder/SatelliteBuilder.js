import SatellitePreview from "./SatellitePreview/SatellitePreview";
import PizzaControls from "./SatelliteControls/SatelliteControls";
import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";

import classes from "./SatelliteBuilder.module.css";
import axios from "axios";

const SatelliteBuilder = () => {
  const prices = {
    astronomical: 64,
    comunication: 25,
    medical: 77,
    meteorological: 96,
    military: 51,
    navigational: 23,
    television: 15,
  };
  const [satellites, setSatellites] = useState({});
  const [price, setPrice] = useState(0);


  const [canBuy, setCanBuy] = useState(true);

  function checkCanBuy(newSatellites) {
    const totalSatellites = Object.values(newSatellites)
      .reduce((total, current) => total + current);
    setCanBuy(totalSatellites > 0);
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

  return (
    <div className={classes.SatelliteBuilder}>
      <Modal show={isBuying} cancelCallback={() => setIsBuying(false)}>
        <OrderSummary satellites={satellites} price={price} />
      </Modal>

      <SatellitePreview
        satellites={satellites}
        price={price} />
      <PizzaControls
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
