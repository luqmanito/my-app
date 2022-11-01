import React from "react";

import styles from "./promo.module.css";
import beef from "../../assets/img/beef-spaghetti - Edited.png";

const PromoCard = () => {
  return (
    
      <div class={`text-center rounded-2 w-75 ${styles["left-border"]} "`}>
        <span class="border">
          <img
            src={beef}
            alt="beef Spaghetti"
            class={`${styles["beef-spaghetti"]} w-50 
                      ${styles["margin-top:40%"]}`}
          />
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

export default PromoCard;
