import React, { Fragment, useEffect, useState } from "react";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/footer";
import styles from "../style/error.module.css";
import HeaderAdmin from "../components-admin/header/header";
import { activateAccount } from "../helpers/tools";
import { Navigate, useParams } from "react-router-dom";
var CryptoJS = require("crypto-js");

export const Activate = ({ navigate }) => {
  const [isActivated, setIsActivated] = useState(false);
  const { id } = useParams();
  let _secretKey = process.env.REACT_APP_SECRET_KEY;

  let decryptSlash = id.replace("ito", "/");
  console.log(decryptSlash);

  let bytes = CryptoJS.AES.decrypt(decryptSlash, `${_secretKey}`);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log(Number(originalText));

  const activeAcc = async () => {
    try {
      const result = await activateAccount(originalText);
      setIsActivated(true)
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
      <section className={`${styles["mainbody"]}`}>
        <div className={`${styles["body-error"]}`}>
          <h1>{isActivated === true ? 'Your Account has been activated' : 'Activating your account, please wait..'}</h1>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Activate;
