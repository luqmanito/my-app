import React, { Fragment } from "react";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/footer";
import styles from "../style/error.module.css";
import HeaderAdmin from "../components-admin/header/header";

export const Error = () => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const adminRole = login.role;
  // console.log('as', adminRole);
  return (
    <Fragment>
      {adminRole === "admin" ? <HeaderAdmin /> : <NavBar />}
      <body className={`${styles["mainbody"]}`}>
        <div className={`${styles["body-error"]}`}>
          <h1>Oops!</h1>
          <h1>404 - Page Not Found or Under Construction</h1>
        </div>
      </body>
      <Footer />
    </Fragment>
  );
};

export default Error;
