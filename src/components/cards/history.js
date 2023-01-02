import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./history.module.css";

const HistoryCard = () => {

  const { grandTotal } = useSelector((state) => state.payReducer);
  const { cartContents } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  return (
   
    <section className={`${styles["card-history"]} col-5 col-md-3`}>
      <div className={`row ${styles["box"]}`}>
        <div className={`${styles["img-container"]} col-3`}>
          <img className={`${styles["imgprod"]}`} src={cartContents.image} alt="" />
        </div>
        <div className={`${styles["history-detail"]} col-8`}>
          <p className={styles["product-name"]}>{cartContents.product_name}</p>
          <p className={styles["price"]}>{grandTotal}</p>
          <p className={styles["status"]}>Awaiting payment</p>
         
        </div>
      </div>
    </section>
   
  );
};
export default HistoryCard;
