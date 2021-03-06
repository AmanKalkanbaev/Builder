import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

const Modal = ({ children, show,cancel }) => {
  const styles = {
    transform: show ? "translateY(0)" : "translateY(-100vh)",
  }

  return (
    <div className={classes.Modal}>
      <Backdrop show={show} click={cancel} />
      <div className={classes.content} style={styles}>
        {children}
      </div>
    </div>
  );
}

export default Modal; 