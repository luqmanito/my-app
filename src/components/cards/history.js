import React from "react";
import styles from "./history.module.css";
import veggie from "../../assets/img/veggie-tomato-product.png";
const HistoryCard = () => {
  return (
   
    <section className={`${styles["card-history"]} col-5 col-md-3`}>
      <div className={`row ${styles["box"]}`}>
        <div className={`${styles["img-container"]} col-3`}>
          <img className={`${styles["imgprod"]}`} src={veggie} alt="" />
        </div>
        <div className={`${styles["history-detail"]} col-8`}>
          <p className={styles["product-name"]}>Veggie Tomato Mix</p>
          <p className={styles["price"]}>IDR 34.000</p>
          <p className={styles["status"]}>Delivered</p>
         
        </div>
      </div>
    </section>
   
  );
};
export default HistoryCard;
