import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const OrderSummary = ({ satellites, price, click, key}) => {
  for(let i; i <= 0; i++){
  }
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
        <Button>Order</Button>
        <Button onClick={click}>Exit</Button>
      </div>
    </div>
  );
}

export default OrderSummary; 