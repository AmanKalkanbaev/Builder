import axios from "axios";
import { useEffect, useState } from "react";
import Order from "./Order/Order";
import classes from "./Orders.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('https://builder-test-9feed-default-rtdb.firebaseio.com/orders.json')
      .then(response => {

        setOrders(Object.values(response.data));
        
      }); 
  }, []);
  
  
  const results =  orders.map(order => <Order {...order} />);
  console.log(results)
  
  return (
    <div className={classes.Orders}>
      {results}
    </div>
    
  );
}

export default Orders;