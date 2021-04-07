import classes from "./OrderSummary.module.css";

const OrderSummary = ({ satellites, price }) => {
  const results = Object.keys(satellites)
    .map(type => <li>{type}: {satellites[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary; 