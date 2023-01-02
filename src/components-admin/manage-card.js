import React, {Fragment} from "react"
import styles from "../components-admin/manage-card.module.css";
import hazelpay from "../assets/images/hazelpay.png";
import firewing from "../assets/images/firewings.png";


const ManageCardAdmin = () => {

    return (
<Fragment>
<aside className={`col-5 container ${styles["summary"]}`}>
              <p className={` ${styles["fontsummary"]}`}>Delivery Order</p>
              <p className={` ${styles["forcs"]}`}>for Maysarah</p>
              <div className="row">
                <div className={`col-sm  ${styles["hazelpay-content"]}`}>
                  <img src={hazelpay} className={`img-fluid  ${styles["hazelpay"]}`} alt="" />
                </div>  
                <div className={`col-sm ${styles["latte-content"]}`}>
                  <p className={`${styles["hazel-font"]}`} >
                    Hazelnut Latte <br /> x 1 Regular
                  </p>
                </div>
                <div className="col-sm">
                  <p className={`${styles["hazel-font"]}`}>IDR 24.0</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-sm  ${styles["firewing-content"]}`}>
                  <img src={firewing} className={`img-fluid  ${styles["firewing"]}`} alt="" />
                </div>
                <div className="col-sm">
                  <p className={`${styles["hazel-font"]}`}>
                    Chicken Fire Wings <br /> x 2
                  </p>
                </div>
                <div className="col-sm">
                  <p className={`${styles["hazel-font"]}`}>IDR 24.0</p>
                </div>
              </div>
              <div className={`${styles["dash"]}`}>
              <p>-----------------------------------------------</p>
              </div>
              
              <div className={` row ${styles["subtotal-wrap"]}`}>
                <div className={`col-md-8 ${styles["subtotal"]}`}>
                  SUBTOTAL <br />
                  TAX & FEES <br />
                  SHIPPING
                </div>
                <div className={`col-6 col-md-4 ${styles["idr"]}`}>
                  IDR 120.000 <br />
                  IDR 20.000 <br />
                  IDR 10.000
                </div>
                
              </div>
              <div className={` row ${styles["subtotal-wrap"]}`}>
                <div className={`col-md-8 ${styles["total"]}`}>
                  <b>TOTAL</b>  <br />
                </div>
                <div className={`col-6 col-md-4 ${styles["idr150"]}`}>
                <b> IDR 150.000</b>
                </div>
                
              </div>
              
            </aside>
            <div className={` ${styles["box1"]}`}></div>
            <div className={` ${styles["box2"]}`}></div>
            </Fragment>
);
};

export default ManageCardAdmin;
