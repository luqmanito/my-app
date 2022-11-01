import React, { Component, Fragment } from "react";
import styles from "../style/register.module.css"
import { useDocumentTitle } from "../helpers/page-title";
import {Link} from "react-router-dom"
import Footer from "../components/footer/footer";
import { Input } from "../components";

import dish from "../assets/img/dish-table.jpg";
import coffee from "../assets/img/coffee-logo.png";
import google from "../assets/img/google-icon.png";
import fb from "../assets/img/fb-icon.png";
import twitter from "../assets/img/twitter-icon.png";
import ig from "../assets/img/ig-icon.png";

const Register = () => {
  useDocumentTitle("Register")
    return (
      <Fragment>
        <body class={`container-fluid ${styles["body-reg"]}`} >
        <main className={`container ${styles["main-reg"]}`}>
          <aside className={styles["side-content"]}>
            <img src={dish} alt="dish-table" width="682" />
          </aside>
          <aside className={styles["right-side"]}>
            <div className={styles["coffee-icon"]}>
              <img
                src={coffee}
                width="20px"
                height="20px"
                alt="coffee-icon"
              />
              Coffee Shop 
              <Link to={"/login"}>
              <button className={styles["login"]}>login</button>
              </Link>
              
            </div>
            <div>
              <section className={styles["register-form"]}>
                <p className={styles["signup"]}>Sign Up</p>
                <form className={styles["label-input"]}>
                  {/* <label className={styles["email-label"]} for="email">Email Adress:</label>
                  <br />
                  <input className={styles["email-input"]} type="text" placeholder="Enter your email adress" /> */}
                  <Input label="Password" placeholder="Enter your password" />

                  <br />

                  <label className={styles["email-label"]} for="pass">Password:</label>
                  <br />
                  <input className={styles["email-input"]} type="text" placeholder="Enter your password" />
                  <br />
                  <label className={styles["email-label"]} for="num">Phone Number:</label>
                  <br />
                  <input className={styles["email-input"]} type="text" placeholder="Enter your phone number" />
                  <br />
                  <div className={styles["submit"]}>
                    <input className={styles["submit-input"]} type="submit" value="Sign Up" />
                  </div>
                  <button className={styles["oauth"]}>
                    <img className={styles["g-pic"]}
                      src={google}
                      alt="google-icon"
                    />
                    Sign up with Google
                  </button>
                </form>
              </section>
            </div>

            <section className={styles["other-content"]}></section>
          </aside>
        </main>
        <section className={styles["member-card"]}>
          <aside className={styles["member-desc"]}>
            <p className={styles["getmember"]}>
              Get your member
              <br />
              card now!
            </p>
            <p className={styles["letsjoin"]}>
              Let's join with our member and enjoy the deals.
            </p>
          </aside>
          <aside>
            <button className={styles["createnow"]}>Create Now</button>
          </aside>
        </section>
        <footer className={styles["footer-reg"]}>
          <div id="desc">
            <aside className={styles["about-coffe"]}>
              <img
                src={coffee}
                width="27px"
                height="27px"
                alt="coffee-icon"
              />
              <span className={styles["coffee-shop"]}>Coffee Shop</span> <br />
              <p className={styles["coffee-desc"]}>
                Coffee Shop is a store that sells some good <br />
                meals, and especially coffee. We provide <br />
                high quality beans
              </p>
              <aside className={styles["socmed"]}>
                <img src={fb} alt="" width="35px" />
                <img src={twitter} alt="" width="35px" />
                <img src={ig} alt="" width="35px" />
                <p className={styles["socmed-url"]}>@2022CoffeeStore</p>
              </aside>
            </aside>
          </div>
          <aside className={styles["product-info"]}>
            <p className={styles["product"]}>Product</p>

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
              Coffee Shop
              <br />
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
        </body>
      </Fragment>
    );
  }


export default Register;
