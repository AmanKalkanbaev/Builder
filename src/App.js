import Layout from "./components/Layout/Layout";
import SatellitesBuilder from "./components/SatellitesBuilder/SatellitesBuilder";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <SatellitesBuilder>
        </SatellitesBuilder>
      </Layout>
    </div>
  );
}

export default App;
