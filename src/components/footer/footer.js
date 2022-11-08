import React, { Fragment } from "react";
import styles from "../../components/footer/footer.module.css";
import coffee from "../../assets/img/coffee-logo.png";
import fb from "../../assets/img/fb-icon.png";
import twitter from "../../assets/img/twitter-icon.png";
import ig from "../../assets/img/ig-icon.png";

const Footer = () => {
  return (
    
    <main className={`container ${styles["main-footer"]}`}>
    <footer className={`container ${styles["footer-home"]}`}>
            <aside className={styles["desc"]}>
              <aside className={styles["about-coffe"]}>
                <img
                  src={coffee}
                  width="27px"
                  height="27px"
                  alt="coffee-icon"
                />
                <span className={styles["coffeeshp"]}>Coffee Shop</span> <br />
                <p className={styles["coffee-desc"]}>
                  Coffee Shop is a store that sells some good <br />
                  meals, and especially coffee. We provide <br />
                  high quality beans
                </p>
                <aside className={styles["socmed"]}>
                  <img src={fb} alt="fb" width="35px" />
                  <img src={twitter} alt="twitter" width="35px" />
                  <img src={ig} alt="ig" width="35px" />
                  <p className={styles["socmed-url"]}>@2022CoffeeStore</p>
                </aside>
              </aside>
            </aside>
            <aside className={styles["product-info"]}>
              <p className={styles["products"]}>Product</p>

              <p className={styles["download-content"]}>
                Download
                <br />
                <br />
                Pricing <br />
                <br />
                Locations <br />
                <br />
                Countries <br />
                <br />
                Blog
              </p>
            </aside>
            <aside className={styles["engagement"]}>
              <p className={styles["engage"]}>Engage</p>
              <p className={styles["engage-content"]}>
                Coffee Shop ?<br />
                <br />
                FAQ
                <br />
                <br />
                About Us
                <br />
                <br />
                Privacy Policy
                <br />
                <br />
                Terms of Service
              </p>
            </aside>
          </footer>
          </main>
          
  );
};

export default Footer;
