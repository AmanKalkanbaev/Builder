import classes from "./Stars.module.css";

const Stars = (star) => {

    const randomBetween = (a, b) => {
        return (a + (Math.random() * (b - a)));
    }

    const amount = 500;

    for (let i = 0; i < amount; i++) {


        
        const sMin = 1;
        const sMax = 4;
        const giant = 6;
        const dMin = 5;
        const dMax = 25


        let star = document.createElement('div');
        star.classList.toggle("stars");
        let size = Math.round(Math.random() * 10) === 0 ? giant : randomBetween(sMin, sMax);
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = randomBetween(0, 100) + "%";
        star.style.top = randomBetween(0, 100) + "%";
        star.style.boxShadow = "0 0 " + size + "px " + size / 2 + "px #043668";
        star.style.animationDuration = randomBetween(dMin, dMax) + "s";
    }
    return ( 
        <div className={classes.Stars}>
            {star}
        </div>
    );
}
 
export default Stars;