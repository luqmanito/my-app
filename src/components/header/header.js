import React, { useState, useEffect, Fragment } from "react";
import styles from "../header/header.module.css";
import coffee from "../../assets/images/coffee-logo.png";
import search from "../../assets/images/search-icon.png";
import msg from "../../assets/images/msg-icon.png";
import beard from "../../assets/images/beard-man-icon.jpg";
import { Link } from "react-router-dom";
import { getProfile } from "../../helpers/tools";

const Header = ({ onChange }) => {
  const [image, setImage] = useState({});
  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      setImage(result.data.result[0].image);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <Fragment>
      <nav className={`navbar navbar-expand-lg ${styles["header-home"]}`}>
        <div className="container-fluid">
          <a className="navbar-brand">
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
                  <a className={`nav-link ${styles["product"]}`}>Products</a>
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
              <span className={styles.search}>
                <img
                  src={search}
                  alt="search-icon"
                  className={styles["search-icon"]}
                />
                <input type="text" placeholder="Search" onChange={onChange} />
              </span>
              <img src={msg} alt="msg" className={styles["msg-icon"]} />

              <Link to="/profile" className={`${styles["beard"]}`}>
                <img
                  src={image ? image : beard}
                  alt="beard"
                  className={styles["icon-profile-img"]}
                />
              </Link>
            </aside>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
