import React, { useState, useEffect, Fragment } from "react";
import Footer from "../components/footer/footer";
import { useDocumentTitle } from "../helpers/page-title";
import NavBar from "../components/header/NavBar";
import { getProductById } from "../helpers/tools";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "../page-admin/style-admin/detail-prod.module.css";
import brew from "../assets/images/brew.png";
import r from "../assets/images/r.png";
import l from "../assets/images/l.png";
import xl from "../assets/images/xl.png";
import plus from "../assets/images/plus.png";
import min from "../assets/images/min.png";
import withNavigate from "../helpers/withNavigate";

const DetailsProductsAdmin = ({navigate, dataId}) => {
  const { id } = useParams();


  const [detail, setDetail] = useState({});
  const [price, setPrice] = useState({});
  const [base, setBase] = useState({});
  const [detailImage, setDetailImage] = useState({});
  const [idProduct, setIdProduct] = useState({});

  const { idProductStore } = useSelector((state) => state.idReducer);
  const dispatch = useDispatch();

  const getDataProduct = async () => {
    try {
      const result = await getProductById(id);
      setDetail(result.data.result[0]);
      const pre = "http://localhost:8070/";
      const imgDetail = pre + result.data.result[0].image;
      setDetailImage(imgDetail);
      dispatch({ type: "ADD_ID", payload: id });
      const basePrice = result.data.result[0].price;
      setPrice(basePrice);
      setBase(basePrice);
      setIdProduct(id)
    } catch (error) {
      if (error.response.data.statusCode === 403) {
        console.log(error);
      }
    }
  };
  console.log(detail);

  let pre ='http://localhost:8070/'
 






const direct = (dataId) => {
  navigate(`/edit-product/${dataId}`)
}





  useEffect(() => {
    getDataProduct();
    // getCart();
    // handleCheckout();
  }, []);


  useDocumentTitle("Product Detail")
  return (
    <Fragment>
      <NavBar />
      <body className={` ${styles["body-detail"]}`}>
      <main className={`container ${styles["main-detail"]}`}>
      <p className={`container ${styles["promo"]}`} >Favorite & Promo  &gt; <b>Cold Brew</b> </p>
        <section className="row">
          <div className={`col-5 ${styles["left-content"]}`}>
            <div className={`${styles["main-left"]}`}>
            <img className={`img-fluid ${styles["brew"]}`} src={detail.image} alt="" />
            <p className={`${styles["coldbrew"]}`}>{detail.name}</p>
            <p className={`${styles["idr30"]}`}>{detail.price}</p>
            <button className={`${styles["addcart"]}`}>Change Quantity</button> <br /> <br />
            <button onClick={direct} className={`${styles["askstaff"]}`}>Edit Product</button> <br /> <br />
            <button className={`${styles["delmenu"]}`}>Delete Menu</button>
            </div>
          </div>
          <div className={`col-6 ${styles["right-content"]}`}>
            <aside className={`container ${styles["main-content"]}`}>
              <p className={`${styles["schedule"]}`}>Delivery only on <b>Monday to <br /> friday </b>  at <b> 1 - 7 pm </b> </p>
              <p className={`${styles["brewmethod"]}`}>
                {detail.description}
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
            {/* <div className={`col-8 ${styles["left-bottom"]}`}>
              <div className="container">
                <div className="row">
                  <div className="col">
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
            </div> */}
            <div className={`col-4 ${styles["right-bottom"]}`}>
              {/* <button className={`${styles["button-check"]}`}>Checkout</button> */}
            </div>
          </div>
        </section>
      </main>
      </body>
      <Footer />
    </Fragment>
  );
};

export default withNavigate(DetailsProductsAdmin);
