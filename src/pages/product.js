import React, { Component, Fragment, useEffect, useState } from "react";
import styles from "../style/product.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import ProductCard from "../components/cards/product";
import PromoCard from "../components/cards/promo";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Axios from "axios";

import coffee from "../assets/img/coffee-logo.png";
import search from "../assets/img/search-icon.png";
import msg from "../assets/img/msg-icon.png";
import beard from "../assets/img/beard-man-icon.jpg";
import beef from "../assets/img/beef-spaghetti - Edited.png";
import veggie from "../assets/img/veggie-tomato-product.png";
import hazel from "../assets/img/hazzelnut-product.png";
import summer from "../assets/img/summer-fried-rice-prodcut.png";
import creamy from "../assets/img/creamy-ice-latte-product.png";
import drum from "../assets/img/drum-stick-prod.png";
import salty from "../assets/img/salty-rice-prod.png";
import fb from "../assets/img/fb-icon.png";
import twitter from "../assets/img/twitter-icon.png";
import ig from "../assets/img/ig-icon.png";
import axios from "axios";

// function Card({name, price}) {
//   return (
//     div
//   )
// }




const Product = () => {
  // const [dataProducts, setDataProducts] = useState([])
  // useEffect(()=> {
  //   Axios.get('http://localhost:8070/api/show/products/all')
  //   .then(res => {
  //     console.log('data API', res.data);
  //     const responseAPI = res.data

  //     setDataProducts(responseAPI)
  //   })
  //   .catch(err => {
  //     console.log('error', err);
  //   })
  // })

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/api/show/products/all?limit=12")
      .then((res) => {
        // console.log(res);
        setProduct(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useDocumentTitle("Products");
  return (
    <Fragment>
      <main className={`container-fluid ${styles["main-product"]}`}>
        {/* <header className={styles["header-prod"]}>
          <aside className={styles["left-header"]}>
            <img src={coffee} width="30px" height="30px" alt="coffee-icon" />
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
            <img src={msg} alt="msg" className={styles["msg-icon"]} />

            <img
              src={beard}
              alt="beard"
              className={styles["icon-profile-img"]}
            />
          </aside>
        </header> */}
        <Header />

        <section className="container-fluid text-dark">
          <div className="row align-items-center">
            <section className={`col-4 border w-25 ${styles["box-side"]}`}>
              <h1 className={`text-center ${styles["promoforyou"]}`}>
                Promo for you
              </h1>
              <br />
              <p className={`text-center ${styles["coupons"]}`}>
                Coupons will be updated every weeks. <br />
                Check them out!
              </p>
              <PromoCard />
              <div className="text-center d-grid gap-2 col-9 mx-auto">
                <button
                  type="button"
                  className={`btn btn-primary btn-lg ${styles["button-product"]}`}
                >
                  Apply Coupon
                </button>
              </div>
              <p
                className={`${styles["term"]}  ${styles["font-weight: bold"]}`}
              >
                Terms and Condition <br />
              </p>
              <p className={styles["ruleterm"]}>
                1. You can only apply 1 coupon per day <br />
                2. It only for dine in <br />
                3. Buy 1 get 1 only for new user <br />
                4. Should make member card to apply coupon
              </p>
            </section>

            <section
              className={`col-8 border w-75 row align-items-start ${styles["main-side"]}`}
            >
              <div className="container text-center">
                <aside
                  className={`row align-items-start ${styles["sub-category"]}`}
                >
                  <aside
                    className={`col text-decoration-underline align-middle ${styles["fav-prod"]}`}
                  >
                    <p>Favorite Product</p>
                  </aside>
                  <aside className={`col  ${styles["category"]}`}>Coffee</aside>
                  <aside className={`col  ${styles["category"]}`}>
                    Non Coffee
                  </aside>
                  <aside className={`col ${styles["category"]}`}>Foods</aside>
                  <aside className={`col ${styles["category"]}`}>Add-on</aside>
                </aside>
              </div>
              <aside className={`"container text-center ${styles["sub-list"]}`}>
                <div
                  className={`"container text-center ${styles["list-products"]}`}
                >
                  <aside className={`row align-items-start ${styles["prod-wrap"]}`}>

                  {product.map((product) => {
                    return <ProductCard name={product.name} price={'IDR ' + product.price} key={product.id}/>
                  })}    
     
                  </aside>
                </div>
  
              </aside>
            </section>
          </div>
        </section>
        <footer className={styles["footer-product"]}>
          <aside className={styles["desc"]}>
            <aside className={styles["about-coffe"]}>
              <img src={coffee} width="27px" height="27px" alt="coffee-icon" />
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
    </Fragment>
  );
};

export default Product;
