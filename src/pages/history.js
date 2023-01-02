import React, { Fragment } from "react";
import { useDocumentTitle } from "../helpers/page-title";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/footer";
import styles from "../style/history.module.css";
import HistoryCard from "../components/cards/history";
import del from "../assets/images/delete.png";
import delx from "../assets/images/deletex.png";


const History = () => {
  useDocumentTitle("Order History")
  return (
    <Fragment>
      <body className={` ${styles["main-body"]}`}>
        
      
      <main className={`container ${styles["main-history"]}`}>
      <NavBar />
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
          
          </section>
        </div>
        <Footer />
      </main>
      </body>
    </Fragment>
  );
};
export default History;
