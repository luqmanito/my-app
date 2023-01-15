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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = ({ navigate }) => {
  const initValue = { email: "", password: "", phone: "" };
  const [formValues, setFormValues] = useState(initValue);
  const [formErrors, setFormErrors] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [clickLogin, setClickLogin] = useState(false);
  const isPending = useSelector((state) => state.globalReducer.isLoading);
  // console.log(isPending);
  useDocumentTitle("Register");
  const dispatch = useDispatch();
  const [isPwdShown, setIsPwdShown] = useState(false);
  const handleChange = (el) => {
    const { name, value } = el.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    dispatch({ type: "LOADING_PAGE" });
    event.preventDefault();
    setFormErrors(validate(formValues));
    
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
      mobile_number: event.target.phone.value,
    };
    if (!body.email || !body.password || !body.mobile_number) {
      dispatch({ type: "LOADING_PAGE_FALSE" });
      // toast.error("semua kolom harus terisi!", {
      //   position: toast.POSITION.TOP_CENTER,
      //   autoClose: 2000,
      // });
    } else {
      try {
        const result = await signup(body);
        console.log(body);
        console.log(result);
        dispatch({ type: "LOADING_PAGE_FALSE" });
        if (result.data.msg === "Register Succesfully") {
          setIsSubmit(true);
          toast.success(
            "Register success please check your email account to activate!",
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            }
          );
          setTimeout(() => {
            navigate("/login");
          }, 4000);
        }
        console.log(result);
      } catch (error) {
        dispatch({ type: "LOADING_PAGE_FALSE" });
        toast.error("Email or phone already exists!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        setIsCorrect(true);
        setTimeout(() => {
          setIsCorrect(false);
        }, 2000);
      } finally {
        setClickLogin(!clickLogin);
      }
    }
  };

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
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required !";
    }
    return errors;
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUserInfo(userInfo);
    if (!userInfo) return;
    if (Object.keys(formErrors).length === 0 && isSubmit)
      setTimeout(() => {
        navigate("/login");
      }, 4000);
  }, [formErrors, clickLogin]);

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
              <button
                className={styles["login"]}
                // onClick={dispatch({ type: "LOADING_PAGE_FALSE" })}
              >
                login
              </button>
            </Link>
          </div>
          <div>
            <section className={styles["register-form"]}>
              <p className={styles["signup"]}>Sign Up</p>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className={styles["ui-success"]}>
                  Account created succesfully!
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
              <form onSubmit={handleSubmit} className={styles["label-input"]}>
                <label className={styles["email-label"]} htmlFor="email">
                  Email Adress:
                </label>
                <br />
                <input
                  onChange={handleChange}
                  className={styles["email-input"]}
                  type="text"
                  name="email"
                  placeholder="Enter your email adress"
                  value={formValues.email}
                />
                <p className={styles["errormail"]}>{formErrors.email}</p>
                <br />

                <label className={styles["email-label"]} htmlFor="pass">
                  Password:
                </label>
                <br />
                <input
                  onChange={handleChange}
                  className={styles["email-input"]}
                  type={isPwdShown ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formValues.password}
                />
                <img
                  className={styles["icon-eye"]}
                  src={isPwdShown ? eye : eyeDash}
                  alt=""
                  onClick={() => setIsPwdShown(!isPwdShown)}
                />
                <p className={styles["errorpw"]}>{formErrors.password}</p>
                <br />
                <label className={styles["email-label"]} htmlFor="num">
                  Phone Number:
                </label>
                <br />
                <input
                  onChange={handleChange}
                  className={styles["email-input"]}
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formValues.phone}
                />
                <p className={styles["errorpw"]}>{formErrors.phone}</p>
                <br />
                <div className={styles["submit"]}>
                  <input
                    className={
                      isPending
                        ? styles["submit-loading"]
                        : styles["submit-input"]
                    }
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
                <ToastContainer />
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
