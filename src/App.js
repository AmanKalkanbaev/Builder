import Layout from "./components/Layout/Layout";
import SatelitesBuilder from "./components/SatelitesBuilder/SatelitesBuilder";
import './App.css';

function App() {
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
