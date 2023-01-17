import React, { Fragment } from "react";
import { useDocumentTitle } from "../helpers/page-title";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/footer";
import styles from "../style/history.module.css";
import HistoryCard from "../components/cards/history";

import { useDispatch, useSelector } from "react-redux";
import EmptyHistory from "../components/cards/empty-history";

const History = () => {
  const cartContents = useSelector(
    (state) => state.transactionReducer.transSuccess
  );

  console.log(cartContents);
  useDocumentTitle("Order History");
  return (
    <Fragment>
      {/* <aside className={` ${styles["main-body"]}`}> */}
        <main className={`container ${styles["main-history"]}`}>
          <NavBar />
          <div className={styles["container"]}>
            <section
              className={`col-12 ${styles["title-container"]} text-center`}
            >
              <h1>Let's see what you have bought!</h1>
              <p className={styles["del"]}> Select item to delete</p>
            </section>

            <section className={`container ${styles["list-history"]}`}>
              {cartContents.length === 0 ? (
                <EmptyHistory/>
              ) : (
                cartContents.map((item) => {
                  console.log(item.subtotal);
                  return (
                    <HistoryCard
                      key={item.id_product}
                      name={item.products_name}
                      image={item.image}
                      price={item.subtotal=== undefined ? item.total_order : item.subtotal}
                      status={"pending"}
                    />
                  );
                })
              )}
            </section>
          </div>
          <Footer />
        </main>
      {/* </aside> */}
    </Fragment>
  );
};
export default History;
