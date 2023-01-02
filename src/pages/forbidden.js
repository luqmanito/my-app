import React, { Fragment } from "react";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/footer";
import styles from "../style/forbidden.module.css";
import forbidden from "../assets/images/forbidden.jpg"
import temp from "../assets/images/er403.gif"

function Forbidden() {
  return (
    <Fragment>
      <NavBar />
      <body className={`${styles["mainbody"]}`}>
      <div className={`${styles["body-error"]}`}>
        {/* <h1>Sorry</h1> */}
        <img className={`${styles["forbidden"]}`} src={temp} alt="" />
      </div>
      </body>
      <Footer />
    </Fragment>
  );
}

export default Forbidden;
