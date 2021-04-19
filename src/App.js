import Layout from "./components/Layout/Layout";
import SatelliteBuilder from "./components/SatelliteBuilder/SatelliteBuilder";
import Checkout from "../src/components/Checkout/Checkout"
// import Stars from "./components/UI/Stars/Stars"

import "./App.css";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>

        <Switch>
          <Route path="/" component={SatelliteBuilder} exact/>
          <Route path="/checkout" component={Checkout} />
        </Switch>
        
      </Layout>
      
      {/* <Stars/> */}
    </div>
  );
}

export default App;
