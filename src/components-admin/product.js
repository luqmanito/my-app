import { React, } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import styles from "../components-admin/product.module.css";
import cardImg from "../assets/images/veggie-tomato-product.png";
import edit from "../assets/images/edit-icon.png"

const ProductCardAdmin = ({name, price, image, dataId}) => {
  const navigate = useNavigate()
  let params = useParams()
  let pre ='http://localhost:8070/'

  return (
    <aside className={`col ${styles["product-wrap"]}`}
      onClick={() => navigate(`/detail-product-admin/${dataId}`)}>
    <div className={`${styles["product-card"]}`}>
      <img src={image} 
      alt="" className={`img-fluid ${styles["product-img"]}`} />
      <p className={styles["product-name"]}>{name}</p>
      <p className={styles["product-price"]}>{price}</p>
      {/* <Link to={"/detail-product-admin"}> */}
      <img className={`${styles["edit-icon"]}`}  src={edit} alt="" />
      {/* </Link> */}
    </div>
    </aside>
  );
};

export default ProductCardAdmin;
