import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./history.module.css";
import emptyCart from "../../assets/images/emptycart.png";
// import emptyCart from "../../../assets/images/emptycart.png"

const HistoryCard = (props) => {
  const { grandTotal } = useSelector((state) => state.payReducer);
  const { cartContents } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [name, setName] = useState(props.name !== undefined ? props.name : 'You have no item list, lets shopping');
  const [price, setPrice] = useState(props.price !== undefined ? props.price : '');
  const [image, setImage] = useState(props.image !== undefined ? props.image : emptyCart);
  const [status, setStatus] = useState(props.status !== undefined ? props.status : '');


  const ticked = () => {
    setCheck(!check)
  }

  return (
    <section className={`${styles["card-history"]} col-5 col-md-3`}>
      <label className={`container ${styles["tixbox"]}`} >
        <input 
        onClick={ticked}
        className={`${styles["tixbox-input"]}`} type="checkbox" checked={check} />
        <span className="checkmark"></span>
      </label>
      <div className={`row ${styles["box"]}`}>
        <div className={`${styles["img-container"]} col-3`}>
          <img className={`${styles["imgprod"]}`} src={image} alt="" />
        </div>
        <div className={`${styles["history-detail"]} col-8`}>
          <p className={styles["product-name"]}>{name}</p>
          <p className={styles["price"]}>{price}</p>
          <p className={styles["status"]}>{status}</p>
        </div>
      </div>
    </section>
  );
};
export default HistoryCard;
