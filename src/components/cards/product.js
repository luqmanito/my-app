import { React } from "react";
// import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./product.module.css";
import defaultImg from "../../assets/images/veggie-tomato-product.png";

const ProductCard = ({ name, price, image, dataId }) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const navigate = useNavigate();
  let params = useParams();
  let pre = "http://localhost:8070/";
  return (
    <aside
      className={`col ${styles["product-wrap"]}`}
      onClick={() => navigate(`/detail-product/${dataId}`)}
    >
      <div className={`${styles["product-card"]}`}>
        <img
          src={image}
          alt=""
          className={`img-fluid ${styles["product-img"]}`}
        />
        <p className={styles["product-name"]}>{name}</p>
        <p className={styles["product-price"]}>{rupiah(price)}</p>
        {params?.name}
      </div>
      <img src="../../assets/images/beef bratwust.png" alt="" />
    </aside>
  );
};

export default ProductCard;
