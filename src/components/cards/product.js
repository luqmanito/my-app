import { React, } from "react";
// import axios from "axios";

import styles from "./product.module.css";
import cardImg from "../../assets/img/veggie-tomato-product.png";

const ProductCard = ({name, price, image}) => {

  return (
    <aside className={`col ${styles["product-wrap"]}`}>
    <div className={`${styles["product-card"]}`}>
      {/* <img src={`http://localhost:8070/${image}`} 
      alt="" className={styles["product-img"]} /> */}
      <img src={cardImg} 
      alt="" className={`img-fluid ${styles["product-img"]}`} />
      <p className={styles["product-name"]}>{name}</p>
      <p className={styles["product-price"]}>{price}</p>
    </div>
    </aside>
  );
};

export default ProductCard;
