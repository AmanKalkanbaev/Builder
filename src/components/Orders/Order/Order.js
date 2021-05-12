import classes from "./Order.module.css";

const Order = ({ name, phone, address, satellites,price,type }) => {
  const output = Object.keys(satellites).map(label => <em key={label}>{label}: - {satellites[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li key={type}><span>Name:</span> {name}</li>
      <li key={type}><span>Phone:</span> {phone}</li>
      <li key={type}><span>Address:</span> {address}</li>
      <li key={type}><span>Your satellites:</span>  {output}</li>
      <li key={type}><span>Price:</span> {price}</li>
    </ul>
  );
}

export default Order;