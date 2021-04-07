import Layout from "./components/Layout/Layout";
import SatelliteBuilder from "./components/SatelliteBuilder/SatelliteBuilder";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <SatelliteBuilder />
      </Layout>
    </div>
  );
}

export default App;
