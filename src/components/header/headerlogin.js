import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../header/headerlogin.module.css";
import coffee from "../../assets/img/coffee-logo.png";
import search from "../../assets/img/search-icon.png";
import msg from "../../assets/img/msg-icon.png";
import beard from "../../assets/img/beard-man-icon.jpg";

const HeaderLogin = () => {
  return (
    <Fragment>
      <main className={styles["body-home"]}>
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

          <Link to="/products" className={`${styles["link"]}`}>
            <p className={`${styles["product"]}`}>Product</p>
          </Link>

          {/* <Link to="/payment" className={`${styles["link"]}`}> */}
          <p className={`${styles["cart"]}`}>Your Cart</p>
          {/* </Link> */}
          {/* <Link to="/history" className={`${styles["link"]}`}> */}
          <p className={`${styles["history"]}`}>History</p>
          {/* </Link> */}
        </aside>
        <aside className={`${styles["right-header"]}`}>
          <Link to="/login" className={`${styles["login"]}`}>
            <p>Login</p>
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
      </main>
    </Fragment>
  );
};

export default HeaderLogin;
