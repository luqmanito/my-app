import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../header/headerlogin.module.css";
import coffee from "../../assets/images/coffee-logo.png";
import search from "../../assets/images/search-icon.png";
import msg from "../../assets/images/msg-icon.png";
import beard from "../../assets/images/beard-man-icon.jpg";

const HeaderLogin = () => {
  return (
    <Fragment>
      <header className={styles["header-home"]}>
        <aside className={`${styles["left-header"]}`}>
          <img
            className={`${styles["coffee-logos"]}`}
            src={coffee}
            alt="coffee-icon"
          />
          <span className={`${styles["coffeeshop"]}`}>Coffee Shop</span>
        </aside>
        <aside className={`${styles["center-header"]}`}>
          <Link to="/" className={`${styles["link"]}`}>
            <p className={`${styles["home"]}`}>Home</p>
          </Link>

          <Link to="/products/all" className={`${styles["link"]}`}>
            <p className={`${styles["product"]}`}>Product</p>
          </Link>
          <p className={`${styles["cart"]}`}>Your Cart</p>
          <p className={`${styles["history"]}`}>History</p>
        </aside>
        <aside className={`${styles["right-header"]}`}>
          <Link to="/login" className={`${styles["login"]}`}>
            <p className={`${styles["p-login"]}`}>Login</p>
          </Link>

          <Link to="/register">
            <button
              type="button"
              className={`btn btn-primary ${styles["button-sign-up"]}`}
            >
              Sign Up
            </button>
          </Link>
        </aside>
      </header>
    </Fragment>
  );
};

export default HeaderLogin;
