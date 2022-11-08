import { React, } from "react";

import { Link } from "react-router-dom";
import styles from "../components-admin/product.module.css";
import cardImg from "../assets/img/veggie-tomato-product.png";
import edit from "../assets/img/edit-icon.png"

const ProductCardAdmin = ({name, price, image}) => {

  return (
    <aside className={`col ${styles["product-wrap"]}`}>
      
    <div className={`${styles["product-card"]}`}>
      {/* <img src={`http://localhost:8070/${image}`} 
      alt="" className={styles["product-img"]} /> */}
      <img src={cardImg} 
      alt="" className={`img-fluid ${styles["product-img"]}`} />
      <p className={styles["product-name"]}>{name}</p>
      <p className={styles["product-price"]}>{price}</p>
      <Link to={"/detail-product-admin"}>
      <img className={`${styles["edit-icon"]}`}  src={edit} alt="" />
      </Link>
    </div>
    </aside>
  );
};

export default ProductCardAdmin;
