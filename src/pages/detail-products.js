import React, { Fragment } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useDocumentTitle } from "../helpers/page-title";

import styles from "../style/detail-products.module.css";
import brew from "../assets/img/brew.png";
import r from "../assets/img/r.png";
import l from "../assets/img/l.png";
import xl from "../assets/img/xl.png";
import plus from "../assets/img/plus.png";
import min from "../assets/img/min.png";

const DetailsProducts = () => {
  useDocumentTitle("Product Detail")
  return (
    <Fragment>
      <Header />
      <main class={`container ${styles["main-detail"]}`}>
      <p class={`container ${styles["promo"]}`} >Favorite & Promo  &gt; <b>Cold Brew</b> </p>
        <section class="row">
          <div class={`col-5 ${styles["left-content"]}`}>
            <div class={`${styles["main-left"]}`}>
            <img className={`img-fluid ${styles["brew"]}`} src={brew} alt="" />
            <p className={`${styles["coldbrew"]}`}>COLD BREW</p>
            <p className={`${styles["idr30"]}`}>IDR 30.000</p>
            <button className={`${styles["addcart"]}`}>Add to Cart</button> <br /> <br />
            <button className={`${styles["askstaff"]}`}>Ask a Staff</button>
            </div>
          </div>
          <div class={`col-6 ${styles["right-content"]}`}>
            <aside className={`container ${styles["main-content"]}`}>
              <p className={`${styles["schedule"]}`}>Delivery only on <b>Monday to <br /> friday </b>  at <b> 1 - 7 pm </b> </p>
              <p className={`${styles["brewmethod"]}`}>
                Cold brewing is a method of <br /> brewing that combines ground{" "}
                <br /> coffee and cool water and uses <br /> time  instead of
                heat to extract <br /> the flavor.  It is brewed in small <br /> batches
                and  steeped for <br /> as long as 48 hours.
              </p>
              <p className={`${styles["size"]}`}> Choose a size</p>
              <div className={`${styles["font-size"]}`}>
              <span className={`${styles["r"]}`}> <img src={r} alt="" /></span>
               <span className={`${styles["l"]}`}> <img src={l} alt="" /></span> 
               <span className={`${styles["xl"]}`}> <img src={xl} alt="" /></span>
               </div>
            </aside>
            <p className={`${styles["choose"]}`}>Choose Delivery Methods</p>
            <aside className={`container ${styles["button"]}`}>
              <div className={`row ${styles["deliv-wrap"]}`}>
                <div className={`col-sm ${styles["dinein-wrap"]}`}>
                  <button className={`${styles["dinein"]}`}>Dine in</button>
                </div>
                <div className={`col-sm ${styles["door-wrap"]}`}>
                  <button className={`${styles["door"]}`}>Door Delivery</button>
                </div>
                <div className={`col-sm ${styles["pickup-wrap"]}`}>
                  <button className={`${styles["pickup"]}`}>Pick up</button>
                </div>
              </div>
            </aside>
            <aside className={`${styles["time-wrap"]}`}>
            <span className={`${styles["settime"]}`}>Set time :</span>
            <input className={`${styles["contentset"]}`} type="text" placeholder="Enter the time you'll arrived" />
            </aside>
          </div>
        </section>
        <section className={`container ${styles["floating-bar"]}`}>
          <div className={`row ${styles["floating-sec"]}`}>
            <div class={`col-8 ${styles["left-bottom"]}`}>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <img className={`img-fluid ${styles["brew2"]}`} src={brew} alt="" />
                  </div>
                  <div className={`col-6 ${styles["result"]}`}>
                    <b>COLD BREW</b> <br /> x1 (Large) <br /> x1 (Regular)
                    </div>
                  <div className={`col ${styles["qty"]}`}>
                    <img className={`${styles["min"]}`} src={min} alt="" /> 2 <img className={`col ${styles["plus"]}`} src={plus} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class={`col-4 ${styles["right-bottom"]}`}>
              <button className={`${styles["button-check"]}`}>Checkout</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default DetailsProducts;
