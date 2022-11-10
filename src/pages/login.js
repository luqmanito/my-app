import React, { Fragment, useEffect, useState } from "react";
import styles from "../style/login.module.css";
import { Link } from "react-router-dom";
import Footer from "../components/footer/footer";
import withNavigate from "../helpers/withNavigate";
import { login } from "../helpers/tools";
import { useDocumentTitle } from "../helpers/page-title";
import Popup from 'reactjs-popup';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import dish from "../assets/img/dish-table.jpg";
import coffee from "../assets/img/coffee-logo.png";
import google from "../assets/img/google-icon.png";

const Login = ({ navigate }) => {
  useDocumentTitle("Login");

  const [userInfo, setUserInfo] = useState({});
  const [body, setBody] = useState({ email: "", password: "" });
  const [clickLogin, setClickLogin] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUserInfo(userInfo);
    if (!userInfo) return;
    // alert("Login Succesfully!");
    toast.success("Login Succesfully!",{
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    })
    navigate("/");
  }, [clickLogin]);

  const handleSubmit = async (el) => {
    el.preventDefault();
    if (!body.email || !body.password)
    try {
      const loginRequest = await login(body);
      localStorage.setItem("userInfo", JSON.stringify(loginRequest.data.data));
    } catch (error) {
      // alert("Email atau Password tidak cocok!");
     
    } finally {
      setClickLogin(!clickLogin);
    }
  };

  const changeHandler = (el) => {
    setBody({ ...body, [el.target.name]: el.target.value });
    console.log(body);
  };


  return (
    <Fragment>

      <body className={`container-fluid ${styles["body-bg"]}`}>
        <main className={`container-fluid ${styles["body-login"]}`}>
          <section className={styles["login-sec"]}>
            <aside className={styles["side-content"]}>
              <img className={`container ${styles["side-img"]}`} src={dish} />
            </aside>
            <aside className={styles["right-side"]}>
              <div className={styles["coffee-icon"]}>
                <img
                  src={coffee}
                  width="20px"
                  height="20px"
                  alt="coffee-icon"
                />
                Coffee Shop
                <Link to={"/register"}>
                  <button className={styles["signup"]}>Sign Up</button>
                </Link>
              </div>
              <div>
                <section className={styles["register-form"]}>
                  <p className={styles["signin"]}>Login</p>

                  <form
                    onSubmit={handleSubmit}
                    className={styles["label-input"]}
                  >
                    <label className={styles["label-email"]} for="email">
                      Email Adress:
                    </label>
                    <br />
                    <input
                      onChange={changeHandler}
                      name="email"
                      className={styles["input-text"]}
                      type="text"
                      placeholder="Enter your email adress"
                    />
                    <br />

                    <label className={styles["label-email"]} for="pass">
                      Password:
                    </label>
                    <br />
                    <input
                      onChange={changeHandler}
                      name="password"
                      className={styles["input-text"]}
                      type="password"
                      placeholder="Enter your password"
                    />
                    <br />

                    <p
                      className={styles["forgotpw"]}
                      onClick={() => {
                        navigate("/forgot");
                      }}
                    >
                      Forgot password?
                    </p>

                    <div id="submit">
                      <input
                        className={styles["input-submit"]}
                        type="submit"
                        value="Login"
                      />
                    </div>
                    <ToastContainer />
                    <button className={styles["oauth"]}>
                      <img
                        src={google}
                        width="20px"
                        height="auto"
                        alt="google-icon"
                      />
                      Login with Google
                    </button>
                  </form>
                </section>
              </div>

              <section className={styles["other-content"]}></section>
            </aside>
          </section>
          <section className={styles["member-card"]}>
            <aside className={styles["member-desc"]}>
              <p className={styles.getmember}>
                Get your member
                <br />
                card now!
              </p>
              <p className={styles.letsjoin}>
                Let's join with our member and enjoy the deals.
              </p>
            </aside>
            <aside>
              <button className={styles.createnow}>Create Now</button>
            </aside>
          </section>
        </main>
        <Footer />
      </body>
    </Fragment>
  );
};

// // const NewComponent = withNavigate(Login)
// const NewComponent = WithSearchParams(WithLocation(withNavigate(Login))) // jd ada punya prop navigate dan location

export default withNavigate(Login);
