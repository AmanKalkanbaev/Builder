

// import classes from "./Order.module.css";

// const Order = ({ name, phone, address, satellites, price }) => {
//   const outputSatellites = Object.keys(satellites)
//     .map(satellite => <em>{satellites} - {satellites[satellite]}</em>);

//   return (
//     <div className={classes.Order}>
//       <div>{name}, {phone}, {address}</div>
//       <div>{outputSatellites}</div>
//       <strong>{price}</strong>
//     </div>
//   );
// }

// export default Order;



import classes from "./Order.module.css";

const Order = ({ name, phone, address, satellites,price }) => {
  const output = Object.keys(satellites).map(label => <em>{label}: - {satellites[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li><span>Name:</span> {name}</li>
      <li><span>Phone:</span> {phone}</li>
      <li><span>Address:</span> {address}</li>
      <li><span>Your satellites:</span>  {output}</li>
      <li><span>Price:</span> {price}</li>
    </ul>
  );
}

export default Order;