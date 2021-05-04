import Layout from "./components/Layout/Layout";
import SatelliteBuilder from "./components/SatelliteBuilder/SatelliteBuilder";
import Checkout from "../src/components/Checkout/Checkout"
// import Star from "./components/UI/Stars/Star"
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
      
      {/* <Star/> */}
    </div>
  );
}

export default App;
