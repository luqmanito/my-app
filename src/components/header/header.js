import React, {Fragment} from "react"
import styles from '../header/header.module.css'
import coffee from "../../assets/img/coffee-logo.png";
import search from "../../assets/img/search-icon.png";
import msg from "../../assets/img/msg-icon.png";
import beard from "../../assets/img/beard-man-icon.jpg";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <Fragment>
        <header className={styles["header-prod"]}>
            <aside className={styles["left-header"]}>
              <img src={coffee} width="30px" height="30px" alt="coffee-icon" />
              <span className={styles["coffeeshop"]}>Coffee Shop</span>
            </aside>
            <aside className={styles["center-header"]}>

            <Link to="/" className={`${styles["link"]}`}>
              <p className={styles["home"]}>Home</p>
              </Link>

              <Link to="/products" className={`${styles["link"]}`}>
              <p className={styles["product"]}>Product</p>
              </Link>

              <Link to="/payment" className={`${styles["link"]}`}>
              <p className={styles["cart"]}>Your Cart</p>
              </Link>

              <Link to="/history" className={`${styles["link"]}`}>
              <p className={styles["history"]}>History</p>
              </Link>

            </aside>
            <aside className={styles["right-header"]}>
              <img
                src={search}
                alt="search-icon"
                className={styles["search-icon"]}
              />
              <img src={msg} alt="msg" className={styles["msg-icon"]} />

              <img
                src={beard}
                alt="beard"
                className={styles["icon-profile-img"]}
              />
            </aside>
          </header>
          </Fragment>
    )
}

export default Header