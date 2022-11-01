import React, { Fragment } from "react";
import { useDocumentTitle } from "../helpers/page-title";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "../style/history.module.css";
import HistoryCard from "../components/cards/history";
import del from "../assets/img/delete.png";
import delx from "../assets/img/deletex.png";


const History = () => {
  useDocumentTitle("Order History")
  return (
    <Fragment>
      
      <main className={`container ${styles["main-history"]}`}>
      <Header />
        <div className={styles["container"]}>
          <section
            className={`col-12 ${styles["title-container"]} text-center`}
          >
            <h1>Let's see what you have bought!</h1>
            <p className={styles["del"]}> Long press to delete item</p>
          </section>
          <section className={styles["delete"]}>
            <img className={styles["del1"]} src={del} alt="" />
            <img className={styles["del2"]} src={delx} alt="" />
          </section>
          <section className={`container ${styles["list-history"]}`}>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
          </section>
        </div>
        <Footer />
      </main>
      
    </Fragment>
  );
};
export default History;
