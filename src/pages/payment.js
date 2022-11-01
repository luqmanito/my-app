import { React, Fragment } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useDocumentTitle } from "../helpers/page-title";

import styles from "../style/payment.module.css";
import hazelpay from "../assets/img/hazelpay.png";
import firewing from "../assets/img/firewings.png";
import card from "../assets/img/card-pic.png";
import bank from "../assets/img/bank-pic.png";
import cod from "../assets/img/cod-pic.png";

const Payment = () => {
  useDocumentTitle("Payment")
  return (
    <Fragment>
       <Header />
      <main className={`container ${styles["main-pay"]}`}>
        <p className={` ${styles["checkout"]}`}>Checkout your <br /> item now!</p>
        <section className={`container ${styles["main-sec"]}`}>
          <div class="row">
            <aside className={`col-5 container ${styles["summary"]}`}>
              <p className={` ${styles["fontsummary"]}`}>Order Summary</p>
              <div class="row">
                <div className={`col-sm  ${styles["hazelpay-content"]}`}>
                  <img src={hazelpay} className={`img-fluid  ${styles["hazelpay"]}`} alt="" />
                </div>  
                <div className={`col-sm ${styles["latte-content"]}`}>
                  <p className={`${styles["hazel-font"]}`} >
                    Hazelnut Latte <br /> x 1 Regular
                  </p>
                </div>
                <div class="col-sm">
                  <p className={`${styles["hazel-font"]}`}>IDR 24.0</p>
                </div>
              </div>
              <div class="row">
                <div className={`col-sm  ${styles["firewing-content"]}`}>
                  <img src={firewing} className={`img-fluid  ${styles["firewing"]}`} alt="" />
                </div>
                <div class="col-sm">
                  <p className={`${styles["hazel-font"]}`}>
                    Chicken Fire Wings <br /> x 2
                  </p>
                </div>
                <div class="col-sm">
                  <p className={`${styles["hazel-font"]}`}>IDR 24.0</p>
                </div>
              </div>
              <div className={`${styles["dash"]}`}>
              <p>-----------------------------------------------</p>
              </div>
              
              <div className={` row ${styles["subtotal-wrap"]}`}>
                <div class={`col-md-8 ${styles["subtotal"]}`}>
                  SUBTOTAL <br />
                  TAX & FEES <br />
                  SHIPPING
                </div>
                <div class={`col-6 col-md-4 ${styles["idr"]}`}>
                  IDR 120.000 <br />
                  IDR 20.000 <br />
                  IDR 10.000
                </div>
                
              </div>
              <div className={` row ${styles["subtotal-wrap"]}`}>
                <div class={`col-md-8 ${styles["total"]}`}>
                  <b>TOTAL</b>  <br />
                </div>
                <div class={`col-6 col-md-4 ${styles["idr150"]}`}>
                <b> IDR 150.000</b>
                </div>
                
              </div>
            </aside>
            <aside className={`container col-5 ${styles["adress-pay"]}`}>
              <div class="row">
                <div class="col-md-8">
                  <p className={`container ${styles["adress-details"]}`}>Adress Details</p>
                </div>
                <div class={`col-6 col-md-4 ${styles["edit"]}`}>
                  <p>edit</p>
                </div>
              </div>

              <section className={` ${styles["section-adress"]}`}>
                <div className={` ${styles["down"]}`}>
                <p className={` ${styles["deliv"]}`}> <u> <b>Delivery</b>  to Iskandar Street</u></p>
                <p className={` ${styles["deliv-2"]}`} >
                  Km 5 refinery road oppsite <br />
                 <u> republic road, effurun, Jakarta</u> <br />
                  <p>+62 81348287878</p>
                  
                </p>
                </div>
              </section >

              <p className={` ${styles["method"]}`}>Payment method</p>
              <section className={` ${styles["border-payment"]}`}>
                <div className={` ${styles["sub-payment"]}`}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className={`form-check-label ${styles["fontlabel"]}`} for="flexRadioDefault1">
                    {" "}
                    <img className={` ${styles["pay-pic"]}`}  src={card} alt="" />  Card{" "}
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className={`form-check-label ${styles["fontlabel"]}`} for="flexRadioDefault2">
                    {" "}
                    <img className={` ${styles["pay-pic"]}`} src={bank} alt="" />  Bank account{" "}
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className={`form-check-label ${styles["fontlabel"]}`}  for="flexRadioDefault2">
                    {" "}
                    <img className={` ${styles["pay-pic"]}`} src={cod} alt="" />  Cash on delivery{" "}
                  </label>
                </div>
                </div>
              </section>
              <button className={` ${styles["confirm"]}`}>Confirm and Pay</button>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Payment;
