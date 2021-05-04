import classes from "./OrderSummary.module.css";

const OrderSummary = ({ satellites, price, key}) => {
  const results = Object.keys(satellites)
      
  .map(type => <li key={key}>{type}: {satellites[type]}</li>);

  let money = "M";
  if(price >= 1000) {
    money = "B";
  }

  return (
    <div className={classes.OrderSummary}>

      <ul>
        {results}
      </ul>

      <div>
        <strong>Total price: $ {price.toFixed(1)} {money}</strong>
      </div>

    </div>
  );
}

export default OrderSummary; 