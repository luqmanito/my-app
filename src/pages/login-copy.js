import React, { Fragment, useEffect, useState } from "react";
import styles from "../style/login.module.css";
import { Link } from "react-router-dom";
import Footer from "../components/footer/footer";
import withNavigate from "../helpers/withNavigate";
import { login } from "../helpers/tools";
import { useDocumentTitle } from "../helpers/page-title";

import dish from "../assets/img/dish-table.jpg";
import coffee from "../assets/img/coffee-logo.png";
import google from "../assets/img/google-icon.png";


const Login2 = ({ navigate }) => {
  useDocumentTitle("Login");

  const [userInfo, setUserInfo] = useState({});
  const [clickLogin, setClickLogin] = useState(false);

  const initValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (el) => {
    const { name, value } = el.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit2 = async (el) => {
    el.preventDefault();
    setFormErrors(validate(formValues));
    try {
      const loginRequest = await login(formValues);
      localStorage.setItem("userInfo", JSON.stringify(loginRequest.data.data));
      setIsSubmit(true);
    } catch (error) {
      setIsCorrect((true));
      setTimeout(() => {
        setIsCorrect((false));
      }, 3000);
    } finally {
      setClickLogin(!clickLogin);
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUserInfo(userInfo);
    if (!userInfo) return;
    if (Object.keys(formErrors).length === 0 && isSubmit)
      setTimeout(() => {
        navigate("/");
      }, 3000);
  }, [formErrors, clickLogin]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format! !";
    }
    if (!values.password) {
      errors.password = "Password is required !";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters! !";
    }
    return errors;
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
                  {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className={styles["ui-success"]}>
                      Signed in succesfully!
                    </div>
                  ) : (
                    ""
                  )}
                  {Object.keys(formErrors).length === 0 && isCorrect ? (
                    <div className={styles["ui-fail"]}>
                      Email or Password is wrong!
                    </div>
                  ) : (
                    ""
                  )}
                  
                  <form
                    onSubmit={handleSubmit2}
                    className={styles["label-input"]}
                  >
                    <div className={styles["ui-divider"]}>
                      <div className={styles["ui-form"]}>
                        <label className={styles["label-email"]} for="email">
                          Email Adress:
                        </label>
                        <br />
                        <input
                          onChange={handleChange}
                          name="email"
                          className={styles["input-text"]}
                          type="text"
                          placeholder="Enter your email adress"
                          value={formValues.email}
                        />
                        <br />
                        <p className={styles["errormail"]}>
                          {formErrors.email}
                        </p>
                        <label className={styles["label-email"]} for="pass">
                          Password:
                        </label>
                        <br />
                        <input
                          onChange={handleChange}
                          name="password"
                          className={styles["input-text"]}
                          type="password"
                          placeholder="Enter your password"
                          value={formValues.password}
                        />
                        <br />
                        <p className={styles["errorpw"]}>
                          {formErrors.password}
                        </p>
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
                        <button className={styles["oauth"]}>
                          <img
                            src={google}
                            width="20px"
                            height="auto"
                            alt="google-icon"
                          />
                          Login with Google
                        </button>
                      </div>
                    </div>
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

export default withNavigate(Login2);
