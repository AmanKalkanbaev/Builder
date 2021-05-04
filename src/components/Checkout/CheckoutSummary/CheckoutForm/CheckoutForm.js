import Button from "../../../UI/Button/Button";
import classes from "../CheckoutForm/CheckoutForm.module.css"
const CheckoutForm = ({submitCallback, cancelCallback }) => {
    return (
        <form className={classes.ChackoutForm} onSubmit={submitCallback}>

            <div className={classes.Forms}>
                <div>
                    <label for="name" >Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="PasholTy">
                    </input>
                </div>

                <div>
                    <label for="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="0552955915"
                        required pattern="0[0-9]{9}">
                    </input>
                </div>

                <div>
                    <label for="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="№25 ctrit Adam">
                    </input>
                </div>
            </div>
            
            <Button >Checkout</Button>
            <Button onClick={cancelCallback}>Cancel</Button>

        </form>

     );
}
 
export default CheckoutForm;