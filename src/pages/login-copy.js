import React, { Fragment, useEffect, useState } from "react";
import styles from "../style/login.module.css";
import { Link, resolvePath } from "react-router-dom";
import Footer from "../components/footer/footer";
import withNavigate from "../helpers/withNavigate";
import { getListCartApi, login } from "../helpers/tools";
import { useDocumentTitle } from "../helpers/page-title";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eye from "../assets/images/eye.png";
import eyeDash from "../assets/images/eyeSlash.png";
import dish from "../assets/images/dish-table.jpg";
import coffee from "../assets/images/coffee-logo.png";
import google from "../assets/images/google-icon.png";
import paymentAction from "../redux/action/cart";
import { useDispatch, useSelector } from "react-redux";
const Login2 = ({ navigate }) => {
  useDocumentTitle("Login");
  const isPending = useSelector((state) => state.globalReducer.isLoading);
  const [userInfo, setUserInfo] = useState({});
  const [clickLogin, setClickLogin] = useState(false);
  const initValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isPwdShown, setIsPwdShown] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (el) => {
    const { name, value } = el.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getDataCart = async () => {
    try {
      const result = await getListCartApi();
      // setCartItems(result.data.result);
      // console.log(result.data);
      // result.data.result.length !== 0 ? dispatch(paymentAction.addtoCartActions(result.data.result)) : console.log('cart kosong');
      // dispatch({ type: "ADD_CART", payload: result.data.result });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit2 = async (event) => {
    dispatch({ type: "LOADING_PAGE" });

    event.preventDefault();
    setFormErrors(validate(formValues));

    if (formValues.email === "" || formValues.password === "") {
      dispatch({ type: "LOADING_PAGE_FALSE" });
      // console.log("a");
      // alert(`semua kolom harus terisi!`);
    } else {
      try {
        const loginRequest = await login(formValues);
        dispatch({ type: "LOADING_PAGE_FALSE" });
        if (loginRequest.data.data.status === "pending") {
          toast.warning(
            "Account is not active, please check your email to activate the account!",
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 5000,
            }
          );
        }
        if (loginRequest.data.data.status === "active") {
          localStorage.setItem(
            "userInfo",
            JSON.stringify(loginRequest.data.data)
          );
          setIsSubmit(true);
          toast.success("Login Succesfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          getDataCart();
        }
      } catch (error) {
        dispatch({ type: "LOADING_PAGE_FALSE" });
        // console.log(error);
        toast.error("Email or Password is wrong!", {
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
      errors.email = "This is not a valid email format!";
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
      <section className={`container ${styles["login-sec"]}`}>
        <aside className={styles["side-content"]}>
          <img className={`container ${styles["side-img"]}`} src={dish} />
        </aside>
        <aside className={styles["right-side"]}>
          <div className={styles["coffee-icon"]}>
            <img src={coffee} width="20px" height="20px" alt="coffee-icon" />
            Coffee Shop
            <Link to={"/register"}>
              <button className={styles["signup"]}>Sign Up</button>
            </Link>
          </div>
          <div>
            <section className={styles["register-form"]}>
              <p className={styles["signin"]}>Login</p>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className={styles["ui-success"]}>Welcome!</div>
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

              <form onSubmit={handleSubmit2} className={styles["label-input"]}>
                <label className={styles["label-email"]} htmlFor="email">
                  Email Adress:
                </label>

                <div>
                  <input
                    onChange={handleChange}
                    name="email"
                    className={styles["input-text"]}
                    type="text"
                    placeholder="Enter your email adress"
                    value={formValues.email}
                  />
                </div>

                <p className={styles["errormail"]}>{formErrors.email}</p>
                <div>
                  <label className={styles["label-pass"]} htmlFor="pass">
                    Password:
                  </label>
                </div>
                <div>
                  <input
                    onChange={handleChange}
                    name="password"
                    className={styles["input-text"]}
                    type={isPwdShown ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formValues.password}
                  />

                  <img
                    className={styles["icon-eye"]}
                    src={isPwdShown ? eye : eyeDash}
                    alt=""
                    onClick={() => setIsPwdShown(!isPwdShown)}
                  />
                </div>
                <p className={styles["errorpw"]}>{formErrors.password}</p>

                <div>
                  <label
                    className={styles["forgotpw"]}
                    onClick={() => {
                      navigate("/forgot");
                    }}
                  >
                    Forgot password?
                  </label>
                </div>
                <input
                  // className={styles["input-submit"]}
                  // type="submit"
                  // value="Login"
                  className={
                    isPending ? styles["input-loading"] : styles["input-submit"]
                  }
                  type="submit"
                  value={isPending ? "Loading.." : "Login"}
                  disabled={isPending ? true : false}
                />
              </form>
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
          <button
            onClick={() => {
              navigate("/register");
            }}
            className={styles.createnow}
          >
            Create Now
          </button>
        </aside>
      </section>

      <Footer />
    </Fragment>
  );
};

// // const NewComponent = withNavigate(Login)
// const NewComponent = WithSearchParams(WithLocation(withNavigate(Login))) // jd ada punya prop navigate dan location

export default withNavigate(Login2);
