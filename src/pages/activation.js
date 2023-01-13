import React, { Fragment, useEffect } from "react";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/footer";
import styles from "../style/error.module.css";
import HeaderAdmin from "../components-admin/header/header";
import { activateAccount } from "../helpers/tools";
import { Navigate, useParams } from "react-router-dom";

export const Activate = ({ navigate }) => {
//   const login = JSON.parse(localStorage.getItem("userInfo"));
//   const adminRole = login.role;
  // console.log('as', adminRole);
  const { id } = useParams();

  const activeAcc = async () => {
    try {
      const result = await activateAccount(id);
      console.log(result);

    } catch (error) {
      if (error.response.data.statusCode === 403) {
       console.log(error);
      }
    }
  };

  useEffect(() => {
    activeAcc();
  }, []);

  
  return (
    <Fragment>
      <body className={`${styles["mainbody"]}`}>
        <div className={`${styles["body-error"]}`}>
          <h1>Your Account has been activated</h1>
        </div>
      </body>
      <Footer />
    </Fragment>
  );
};

export default Activate;
