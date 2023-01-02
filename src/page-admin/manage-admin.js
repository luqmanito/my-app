import { React, Fragment } from "react";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/footer";
import { useDocumentTitle } from "../helpers/page-title";
import HeaderAdmin from "../components-admin/header/header";
import styles from "../page-admin/style-admin/manage-admin.module.css";
import hazelpay from "../assets/images/hazelpay.png";
import firewing from "../assets/images/firewings.png";
import card from "../assets/images/card-pic.png";
import bank from "../assets/images/bank-pic.png";
import cod from "../assets/images/cod-pic.png";
import ManageCardAdmin from "../components-admin/manage-card";

const ManageOrder = () => {
  useDocumentTitle("Payment")
  return (
    <Fragment>
        <HeaderAdmin />
        <main className={`${styles["main-head"]}`}>
      <main className={`container ${styles["main-pay"]}`}>
        <p className={` ${styles["checkout"]}`}>Finish your  <br /> customer order now!</p>
        
        <section className={`container ${styles["main-sec"]}`}>
          <div className="row">
           
            <ManageCardAdmin/>
            
            <aside className={`container col-5 ${styles["adress-pay"]}`}>
              <div className="row">
                <div className="col-md-8">
                  <p className={`container ${styles["adress-details"]}`}>Adress Details</p>
                </div>
                <div className={`col-6 col-md-4 ${styles["edit"]}`}>
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
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className={`form-check-label ${styles["fontlabel"]}`} for="flexRadioDefault1">
                    {" "}
                    <img className={` ${styles["pay-pic"]}`}  src={card} alt="" />  Card{" "}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
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

                <div className="form-check">
                  <input
                    className="form-check-input"
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
              <button className={` ${styles["confirm"]}`}>Mark as done</button>
            </aside>
          </div>
        </section>
        <button className={` ${styles["swipe"]}`}>Swipe up to see upcoming orders ⬆</button> 
      </main>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ManageOrder;
