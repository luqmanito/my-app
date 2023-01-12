import { React } from "react";
import styles from "./empty-history.module.css";

const EmptyHistory = () => {
  return (
    <aside>
      <div className={`${styles["card"]}`}>
        <h1 className={styles["name"]}>You have no order history</h1>
        <h2 className={styles["name2"]}>please buy some of our product</h2>
      </div>
    </aside>
  );
};

export default EmptyHistory;
