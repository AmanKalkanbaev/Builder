import classes from "./Stars.module.css";

const Stars = (star) => {
    const params = {
        amount: 500,
        size: {
          min: 1,
          max: 4,
          giant: 6
        },
        duration: {
          min: 5,
          max: 25,
        }
    }
    const randomBetween = (a, b) => {
        return (a + (Math.random() * (b - a)));
    }
        
    for (let i = 0; i < params.amount; i++) {
        let star = document.createElement('div');
        star.classList.toggle("stars");
        let size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = randomBetween(0, 100) + "%";
        star.style.top = randomBetween(0, 100) + "%";
        star.style.boxShadow = "0 0 " + size + "px " + size / 2 + "px #043668";
        star.style.animationDuration = randomBetween(params.duration.min, params.duration.max) + "s";
      
        ("#root").append(star);
    }
    return ( 
        <div className={classes.Stars}>
            {star}
        </div>
     );
}
 
export default Stars;