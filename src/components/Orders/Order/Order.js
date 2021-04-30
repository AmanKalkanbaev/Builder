import classes from "./Order.module.css";

const Order = ({ name, phone, address, satellites }) => {
  const output = Object.keys(satellites).map(label => <em>{label} - {satellites[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name: {name}</li>
      <li>Phone: {phone}</li>
      <li>Address: {address}</li>
      <li>Yor satellites {output}</li>
    </ul>
  );
}

export default Order;