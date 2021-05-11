import SatellitePreview from "./SatellitePreview/SatellitePreview";
import SatelliteControls from "./SatelliteControls/SatelliteControls";
import {  useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import Button from"../UI/Button/Button";

import classes from "./SatelliteBuilder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";

const SatelliteBuilder = ({history}) => {
  

  const dispatch = useDispatch();

  const satellites = useSelector(state => state.builder.satellites);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);


  useEffect(() => dispatch(load()), [dispatch]);

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
        
        <Button onClick={finishOrdering} green="green">Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
        <OrderSummary satellites={satellites} price={price} />
      </Modal>


      




      <SatellitePreview
        satellites={satellites}
        price={price}
      />

      <SatelliteControls
        startOrdering={startOrdering}
        satellites={satellites}
        price={price}
      />
    </div>
  );
}

export default SatelliteBuilder;




