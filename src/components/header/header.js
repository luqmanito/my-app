import React, { useState, useRef, useEffect, Fragment } from "react";
import styles from "../header/header.module.css";
import coffee from "../../assets/images/coffee-logo.png";
import search from "../../assets/images/search-icon.png";
import msg from "../../assets/images/msg-icon.png";
import beard from "../../assets/images/beard-man-icon.jpg";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
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
      <main className={styles["main-main"]}>
        <main className={styles["main-header"]}>
          <header className={styles["header-prod"]}>
            <aside className={styles["left-header"]}>
              <img src={coffee} width="30px" height="30px" alt="coffee-icon" />
              <span className={styles["coffeeshop"]}>Coffee Shop</span>
            </aside>
            <aside className={styles["center-header"]}>
              <Link to="/" className={`${styles["link"]}`}>
                <p className={styles["home"]}>Home</p>
              </Link>

              <Link to="/products/all" className={`${styles["link"]}`}>
                <p className={styles["product"]}>Product</p>
              </Link>

              <Link to="/payment" className={`${styles["link"]}`}>
                <p className={styles["cart"]}>Your Cart</p>
              </Link>

              <Link to="/history" className={`${styles["link"]}`}>
                <p className={styles["hi`story"]}>History</p>
              </Link>
            </aside>
            <aside className={styles["right-header"]}>
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
                  src={image}
                  alt="beard"
                  className={styles["icon-profile-img"]}
                />
              </Link>
            </aside>
          </header>
        </main>
      </main>
    </Fragment>
  );
};

export default Header;
