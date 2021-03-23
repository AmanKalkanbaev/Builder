import classes from "./SatellitesPreview.module.css";
import map from "./map.png"

const SatellitesPreview = ({satellites}) => {
  const result = [];
  for (const Satellite in Satellites) {
    for (let i = 0; i < Satellites[Satellite]; i++) {
      result.push(<PizzaIngredient type={Satellite} />)
    }
  }
  
  return (
    <div className={classes.SatellitesPreview}>
        <img src={map} alt="WorldMap"/>
    </div>
  );
}
   
  export default SatellitesPreview;