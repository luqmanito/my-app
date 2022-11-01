import React, { Component, Fragment } from "react";
import styles from "../style/profile.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

import coffee from "../assets/img/coffee-logo.png";
import fb from "../assets/img/fb-icon.png";
import twitter from "../assets/img/twitter-icon.png";
import ig from "../assets/img/ig-icon.png";
import search from "../assets/img/search-icon.png";
import msg from "../assets/img/msg-icon.png";
import beard from "../assets/img/beard-man-icon.jpg";
import coffeebeanscropped from "../assets/img/coffeebeanscropped.jpg";
import beardMan from "../assets/img/beard-man.jpg";

const Profile = () => {
  useDocumentTitle("Profile")
    return (
      <Fragment>
        <body className={styles["body-profile"]}>
        {/* <header className={styles["header-prof"]}>
          <aside className={styles["left-header"]}>
            <img
              src={coffee}
              width="30px"
              height="30px"
              alt="coffee-icon"
            />
            <span className={styles["coffeeshop"]}>Coffee Shop</span>
          </aside>
          <aside className={styles["center-header"]}>
            <p className={styles["home"]}>Home</p>
            <p className={styles["product"]}>Product</p>
            <p className={styles["cart"]}>Your Cart</p>
            <p className={styles["history"]}>History</p>
          </aside>
          <aside className={styles["right-header"]}>
            <img
              src={search}
              alt="search-icon"
              className={styles["search-icon"]}
            />
            <img
              src={msg}
              alt="msg-icon"
              className={styles["msg-icon"]}
            />

            <img
              src={beard}
              className={styles["icon-profile-img"]}
            />
          </aside>
        </header> */}
        <Header />
        <img
          src={coffeebeanscropped}
          alt="main-bg-img"
          width="1440px"
          className={styles["main-bg-img"]}
        />
        <section className={styles["main-profile"]}>
          <p className={styles["user-profile"]}>User Profile</p>
          <section className={styles["column1"]}>
            <aside className={styles["profile-photo"]}>
              <div className={styles["wrap"]}>
                <img
                  src={beardMan}
                  className={styles["main-profile-img"]}
                />
              </div>

              <p className={styles["maisarah"]}>Maisarah</p>
              <p className={styles["emailprofile"]}>Maisarah@gmail.com</p>
              <p className={styles["transactions"]}>
                Has been ordered 15 products
              </p>
            </aside>
            <aside className={styles["contacts"]}>
              <form className={styles["form"]}>
                <h2>Contacts</h2>
                <div className={styles["column1"]}>
                  <p className={styles["email"]} type="Email adress :">
                    <input className={styles["input-profile"]} placeholder="Write your email here.."/>
                  </p>
                  <p className={styles["mobilenum"]} type="Mobile number :">
                    <input className={styles["input-profile"]} placeholder="Let us know how to contact you back.." />
                  </p>
                </div>
                <p className={styles["delivadd"]} type="Delivery adress :">
                  <input className={styles["input-profile"]} placeholder="What adress to deliver.." />
                </p>
              </form>
            </aside>
          </section>

          <section className={styles["details"]}>
            <form className={styles["form1"]}>
              <h1 className={styles["detailfont"]}>Details</h1>
              <div className={styles["column2"]}>
                <p className={styles["displayname"]} type="Display name :">
                  <input className={styles["input-profile"]} placeholder="Write your nickname here.." />
                </p>
                <p className={styles["firstname"]} type="DD/MM/YY :">
                  <input className={styles["input-profile"]} placeholder="Your birth date.." />
                </p>
              </div>
              <p className={styles["lastname"]} type="First name :">
                <input className={styles["input-profile"]} placeholder="Write your firstname here.." />
              </p>

              <p className={styles["date"]} type="Last name :">
                <input className={styles["input-profile"]} placeholder="Write your lastname.." />
              </p>

              <section className={styles["radiobtn"]}>
                <div class={styles["malefemale"]}>
                  <input className={styles["input-profile"]}
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="gender"
                  />
                  <label className={styles["genders"]} for="gender1">Male</label>
                  <br />
                  <input className={styles["input-profile"]}
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="gender"
                  />
                  <label className={styles["genders"]} for="gender2">Female</label>
                </div>
              </section>
            </form>

            <aside className={styles["buttons"]}>
              <p className={styles["askchange"]}>
                Do you want to save the <br />
                change?
              </p>  
              <button className={styles["savechange"]}>Save Change</button>
              <button className={styles["cancel"]}>Cancel</button>
              <button className={styles["edit"]}>Edit Password</button>
              <button className={styles["logout"]}>Log out</button>
            </aside>
          </section>
        </section>
        <footer className={styles["footer-prof"]}>
          <div id="desc">
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
                <img src={fb} alt="" width="35px" />
                <img src={twitter} alt="" width="35px" />
                <img src={ig} alt="" width="35px" />
                <p className={styles["socmed-url"]}>@2022CoffeeStore</p>
              </aside>
            </aside>
          </div>
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
        </footer >
        </body>
    
      </Fragment>
    );
  }


export default Profile;
