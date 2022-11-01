import React, { Component, Fragment } from "react";
import styles from "../style/login.module.css";
import {Link, createSearchParams} from "react-router-dom"
import { Input } from "../components";



import Footer from "../components/footer/footer";
import withNavigate from "../helpers/withNavigate";
import WithLocation from "../helpers/withLocation";
import WithSearchParams from "../helpers/withSearchParams";


import dish from "../assets/img/dish-table.jpg";
import coffee from "../assets/img/coffee-logo.png";
import google from "../assets/img/google-icon.png";
 

class Loginrep extends Component {
  state={
    tittle: "Login - Haya Coffee",
    name: ""
  }
  componentDidMount(){
    document.title = this.state.tittle
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prev", prevState);
    console.log("now", this.state);
  }
  render(){
    const {setSearchParams} = this.props
    // for (const p of WithSearchParams) {
    //   console.log(p);
    // }
    // console.log("name: ", searchParams.get("name"));
    return (
      <Fragment>
        <body class={`container-fluid ${styles["body-login"]}`}>
        <main>
          <section className={styles["login-sec"]}>
            <aside className={styles["side-content"]}>
              <img src={dish} width="682px" />
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
                  <form className={styles["label-input"]}>
                    <label className={styles["label-email"]} for="email">Email Adress:</label>
                    <br />


                    <input className={styles["input-text"]} type="text" placeholder="Enter your email adress" onChange={(el) => {
                        this.setState ({
                            name: el.target.value
                        })
                    }} />


                    <br />

                    {/* <label className={styles["label-email"]} for="pass">Password:</label> */}
                    {/* <br /> */}
                    {/* <input className={styles["input-text"]} type="text" placeholder="Enter your password" /> */}
                    <Input label="Password" placeholder="Enter your password" />
                    <br />

                    <p className={styles["forgotpw"]} onClick={() =>{
                      this.props.navigate("/forgot") 
                    }} >Forgot password?</p>

                    <div id="submit">

                      <input className={styles["input-submit"]} type="submit" value="Sign Up" onClick={()=> {
                        const urlSearchParams = createSearchParams({
                            name: this.state.name,     
                        })
                        setSearchParams(urlSearchParams)
                    }}/>
                    </div>

                    <button className={styles["oauth"]} >
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
        <Footer/>
        </body>
      </Fragment>
    );
  }
}

// const NewComponent = withNavigate(Login)
const NewComponent = WithSearchParams(WithLocation(withNavigate(Loginrep))) // jd ada punya prop navigate dan location

export default NewComponent;


