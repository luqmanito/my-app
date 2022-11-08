import React from "react";

import styles from "../components-admin/promo.module.css";
import beef from "../assets/img/beef-spaghetti - Edited.png";
import edit from "../assets/img/edit-icon.png"
import { Link } from "react-router-dom";

const PromoCardAdmin = () => {
  return (
    
      <div className={`text-center rounded-2  ${styles["left-border"]} "`}>
        
        <span className={`border ${styles["sec-border"]}`}>
          <img
            src={beef}
            alt="beef Spaghetti"
            className={`${styles["beef-spaghetti"]} w-50 
                      ${styles["margin-top:40%"]}`}
          />
          <Link to={"/edit-promo"}>
          <img className={`${styles["edit-icon"]}`}  src={edit} alt="" />
          </Link>
          <p className={styles["beef"]}>
            Beef Spaghetti <br />
            20% OFF
          </p>

          <p className={styles["choco"]}>
            Buy 1 Choco Oreo and get 20% off <br />
            for Beef Spaghetti
          </p>

          <p>-------------------------------------</p>

          <p className={styles["code"]}>COUPON CODE</p>
          <p className={styles["codex"]}>FNPR15RG</p>
          <p className={styles["valid"]}>Valid untill October 10th 2020</p>
        </span>
      </div>
      
  );
};

export default PromoCardAdmin;
