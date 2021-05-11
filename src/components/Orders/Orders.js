import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/orders";
import Order from "./Order/Order";
import classes from "./Orders.module.css";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);

  useEffect(() => dispatch(load()), [dispatch]);
  
  
  const results =  orders.map(order => <Order {...order} />);
  console.log(results)
  
  return (
    <div className={classes.Orders}>
      {results}
    </div>
    
  );
}

export default Orders;