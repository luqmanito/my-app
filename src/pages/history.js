import React, { Fragment } from "react";
import { useDocumentTitle } from "../helpers/page-title";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/footer";
import styles from "../style/history.module.css";
import HistoryCard from "../components/cards/history";
import del from "../assets/images/delete.png";
import delx from "../assets/images/deletex.png";
import { useDispatch, useSelector } from "react-redux";

const History = () => {
  const cartContents = useSelector(
    (state) => state.transactionReducer.transSuccess
  );
  // console.log(cartContents);
  useDocumentTitle("Order History");
  return (
    <Fragment>
      <aside className={` ${styles["main-body"]}`}>
        <main className={`container ${styles["main-history"]}`}>
          <NavBar />
          <div className={styles["container"]}>
            <section
              className={`col-12 ${styles["title-container"]} text-center`}
            >
              <h1>Let's see what you have bought!</h1>
              <p className={styles["del"]}> Select item to delete</p>
            </section>
            <section className={styles["delete"]}>
              <img className={styles["del1"]} src={del} alt="" />
              <img className={styles["del2"]} src={delx} alt="" />
            </section>
            <section className={`container ${styles["list-history"]}`}>
              {cartContents === undefined ? (
                <HistoryCard />
              ) : (
                cartContents &&
                cartContents.map((item) => {
                  return (
                    <HistoryCard
                      key={item[0].id_product}
                      name={item[0].product_name}
                      image={item[0].image}
                      price={item.subtotal}
                      status={"pending"}
                    />
                  );
                })
              )}
            </section>
          </div>
          <Footer />
        </main>
      </aside>
    </Fragment>
  );
};
export default History;
