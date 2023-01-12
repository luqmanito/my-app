import React, { Component, Fragment, useEffect, useState } from "react";
import styles from "../style/register.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import { Link } from "react-router-dom";
import withNavigate from "../helpers/withNavigate";
import { signup } from "../helpers/tools";
import Footer from "../components/footer/footer";
import dish from "../assets/images/dish-table.jpg";
import coffee from "../assets/images/coffee-logo.png";
import google from "../assets/images/google-icon.png";
import eye from "../assets/images/eye.png";
import eyeDash from "../assets/images/eyeSlash.png";
import { useDispatch, useSelector } from "react-redux";
import IsLoading from "../components/loading/isLoading";

const Register = ({ navigate }) => {
  const isPending = useSelector((state) => state.globalReducer.isLoading);
  // console.log(isPending);
  useDocumentTitle("Register");
  const dispatch = useDispatch();
  const [isPwdShown, setIsPwdShown] = useState(false);
  
  const handleSubmit = async (event) => {
    dispatch({ type: "LOADING_PAGE" });
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
      mobile_number: event.target.phone.value,
    };
    if (!body.email || !body.password || !body.mobile_number) {
      dispatch({ type: "LOADING_PAGE_FALSE" });
      alert(`semua kolom harus terisi!`);
    } else {
      try {
        const result = await signup(body);
        dispatch({ type: "LOADING_PAGE_FALSE" });
        console.log(result);
        alert("Register success");
        navigate("/login");
      } catch (error) {
        dispatch({ type: "LOADING_PAGE_FALSE" });
        alert("email or phone already exist");
      }
    }
  };

  return (
    <Fragment>
      <main className={`container ${styles["main-reg"]}`}>
        <aside className={styles["side-content"]}>
          <img
            className={` ${styles["dish-table"]}`}
            src={dish}
            alt="dish-table"
            width="682"
          />
        </aside>

        <aside className={styles["right-side"]}>
          <div className={styles["coffee-icon"]}>
            <img src={coffee} width="20px" height="20px" alt="coffee-icon" />
            Coffee Shop
            <Link to={"/login"}>
              <button className={styles["login"]}
              // onClick={dispatch({ type: "LOADING_PAGE_FALSE" })}
              >login</button>
            </Link>
          </div>
          <div>
            <section className={styles["register-form"]}>
              <p className={styles["signup"]}>Sign Up</p>
              <form onSubmit={handleSubmit} className={styles["label-input"]}>
                <label className={styles["email-label"]} htmlFor="email">
                  Email Adress:
                </label>
                <br />
                <input
                  className={styles["email-input"]}
                  type="text"
                  name="email"
                  placeholder="Enter your email adress"
                />

                <br />

                <label className={styles["email-label"]} htmlFor="pass">
                  Password:
                </label>
                <br />
                <input
                  className={styles["email-input"]}
                  type={isPwdShown ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                />
                <img
                  className={styles["icon-eye"]}
                  src={isPwdShown ? eye : eyeDash}
                  alt=""
                  onClick={() => setIsPwdShown(!isPwdShown)}
                />
                <br />
                <label className={styles["email-label"]} htmlFor="num">
                  Phone Number:
                </label>
                <br />
                <input
                  className={styles["email-input"]}
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                />
                <br />
                <div className={styles["submit"]}>
                  <input
                    className={isPending ? styles["submit-loading"] : styles["submit-input"]}
                    type="submit"
                    value={isPending ? "Loading.." : "Signup"}
                    disabled={isPending ? true : false}
                  />
                </div>
                <button className={styles["oauth"]}>
                  <img
                    className={styles["g-pic"]}
                    src={google}
                    alt="google-icon"
                  />
                  Sign up with Google
                </button>
              </form>
            </section>
          </div>

          <section className={styles["other-content"]}></section>
        </aside>
      </main>
      <section className={styles["member-card"]}>
        <aside className={styles["member-desc"]}>
          <p className={styles["getmember"]}>
            Get your member
            <br />
            card now!
          </p>
          <p className={styles["letsjoin"]}>
            Let's join with our member and enjoy the deals.
          </p>
        </aside>
        <aside>
          <button className={styles["createnow"]}>Create Now</button>
        </aside>
      </section>
      <Footer />
      {/* </body> */}
    </Fragment>
  );
};

export default withNavigate(Register);
