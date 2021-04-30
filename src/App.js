import Layout from "./components/Layout/Layout";
import SatelliteBuilder from "./components/SatelliteBuilder/SatelliteBuilder";
import Checkout from "../src/components/Checkout/Checkout"
// import Stars from "./components/UI/Stars/Stars"
import { Redirect, Route, Switch } from "react-router";
import Orders from "./components/Orders/Orders";

import "./App.css";


const App = () => {
  return (
    <div className="App">
      <Layout>

        <Switch>
          <Route path="/" component={SatelliteBuilder} exact/>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/"/>
        </Switch>
        
      </Layout>
      
      {/* <Stars/> */}
    </div>
  );
}

export default App;
