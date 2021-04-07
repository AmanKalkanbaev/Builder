import Layout from "./components/Layout/Layout";
import SatelliteBuilder from "./components/SatelliteBuilder/SatelliteBuilder";
import Stars from "./components/UI/Stars/Stars";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Stars/> */}
      <Layout>
        <SatelliteBuilder />
      </Layout>
    </div>
  );
}

export default App;
