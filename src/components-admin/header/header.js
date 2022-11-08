import React, {Fragment} from "react"
import styles from '../header/header.module.css'
import coffee from "../../assets/img/coffee-logo.png";
import search from "../../assets/img/search-icon.png";
import msg from "../../assets/img/msg-icon.png";
import beard from "../../assets/img/beard-man-icon.jpg";
import { Link } from "react-router-dom";


const HeaderAdmin = () => {
    return (
        <Fragment>
          <main className={styles["main-main"]}>
          <main className={styles["main-header"]}>
        <header className={styles["header-prod"]}>
            <aside className={styles["left-header"]}>
              <img src={coffee} width="30px" height="30px" alt="coffee-icon" />
              <span className={styles["coffeeshop"]}>Coffee Shop</span>
            </aside>
            <aside className={styles["center-header"]}>

            <Link to="/admin" className={`${styles["link"]}`}>
              <p className={styles["home"]}>Home</p>
              </Link>

              <Link to="/products-admin" className={`${styles["link"]}`}>
              <p className={styles["product"]}>Product</p>
              </Link>

              <Link to="/manage-order" className={`${styles["link"]}`}>
              <p className={styles["cart"]}>Orders</p>
              </Link>

              <Link to="/dashboard" className={`${styles["link"]}`}>
              <p className={styles["hi`story"]}>Dashboard</p>
              </Link>

            </aside>
            <aside className={styles["right-header"]}>
              <img
                src={search}
                alt="search-icon"
                className={styles["search-icon"]}
              />
              <img src={msg} alt="msg" className={styles["msg-icon"]} />

              <Link to="/profile" className={`${styles["beard"]}`}>
              <img
                src={beard}
                alt="beard"
                className={styles["icon-profile-img"]}
              />
              </Link>
            </aside>
          </header>
          </main>
          </main>
          </Fragment>
    )
}

export default HeaderAdmin