import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const OrderSummary = ({ satellites, price }) => {
  const results = Object.keys(satellites)
    .map(type => <li>{type}: {satellites[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <ul>
        {results}
      </ul>
      <div>
        <strong>Total price: $ {price.toFixed(1)} M</strong>
        <Button>Order</Button>
        <Button>Exit</Button>
      </div>
    </div>
  );
}

export default OrderSummary; 