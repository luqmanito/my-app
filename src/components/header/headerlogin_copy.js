import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../header/headerlogin.module.css";
import coffee from "../../assets/images/coffee-logo.png";


const HeaderLogin2 = () => {
  return (
    <Fragment>
      <nav className={`navbar navbar-expand-lg ${styles["header-home"]}`}>
        <div className="container-fluid">
          <a className="navbar-brand" >
            <img
              className={`${styles["coffee-logos"]}`}
              src={coffee}
              alt="coffee-icon"
            />
            <span className={`${styles["coffeeshop"]}`}>Coffee Shop</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles["center-header"]}`}
              >
                <li className="nav-item">
                  <Link to="/" className={`${styles["link"]}`}>
                    <a
                      className={`nav-link ${styles["home"]}`}
                      aria-current="page"
                      
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products/all" className={`${styles["link"]}`}>
                    <a className={`nav-link ${styles["product"]}`} >
                      Products
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <a className={`nav-link ${styles["cart"]}`}>Your Cart</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles["history"]}`}>History</a>
                </li>
              </ul>
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
          </div>
        </div>
      </nav>
    </Fragment>

    // <Fragment>
    //   <header className={styles["header-prod"]}>
    //     <aside className={styles["left-header"]}>
    //       <img src={coffee} width="30px" height="30px" alt="coffee-icon" />
    //       <span className={styles["coffeeshop"]}>Coffee Shop</span>
    //     </aside>
    //     <aside className={styles["center-header"]}>
    //       <Link to="/" className={`${styles["link"]}`}>
    //         <p className={styles["home"]}>Home</p>
    //       </Link>

    //       <Link to="/products/all" className={`${styles["link"]}`}>
    //         <p className={styles["product"]}>Product</p>
    //       </Link>

    //       <Link to="/payment" className={`${styles["link"]}`}>
    //         <p className={styles["cart"]}>Your Cart</p>
    //       </Link>

    //       <Link to="/history" className={`${styles["link"]}`}>
    //         <p className={styles["hi`story"]}>History</p>
    //       </Link>
    //     </aside>
    //     <aside className={styles["right-header"]}>
    //       <span className={styles.search}>
    //         <img
    //           src={search}
    //           alt="search-icon"
    //           className={styles["search-icon"]}
    //         />
    //         <input type="text" placeholder="Search" onChange={onChange} />
    //       </span>

    //       <img src={msg} alt="msg" className={styles["msg-icon"]} />
    //       <Link to="/profile" className={`${styles["beard"]}`}>
    //         <img
    //           src={image ? image : beard}
    //           alt="beard"
    //           className={styles["icon-profile-img"]}
    //         />
    //       </Link>
    //     </aside>
    //   </header>
    // </Fragment>
  );
};

export default HeaderLogin2;
