import React, { Component, Fragment, useEffect, useState } from "react";
import styles from "../style/register.module.css"
import { useDocumentTitle } from "../helpers/page-title";
import {Link} from "react-router-dom"
import withNavigate from "../helpers/withNavigate";
import { signup } from "../helpers/tools";
import Footer from "../components/footer/footer";
import dish from "../assets/img/dish-table.jpg";
import coffee from "../assets/img/coffee-logo.png";
import google from "../assets/img/google-icon.png";
import fb from "../assets/img/fb-icon.png";
import twitter from "../assets/img/twitter-icon.png";
import ig from "../assets/img/ig-icon.png";
import { Axios } from "axios";

const Register = ({navigate}) => {
  useDocumentTitle("Register")


  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
      mobile_number: event.target.phone.value,
    };
    
    try {
      const result = await signup(body);
      console.log(result);
      alert("Register success");
      navigate("/login");
    } catch (error) {
      console.log(error);
      // alert(error)
    }
  };


    return (
      <Fragment>
        <body className={`container-fluid ${styles["body-reg"]}`} >
        <main className={`container ${styles["main-reg"]}`}>
          <aside className={styles["side-content"]}>
            <img className={` ${styles["dish-table"]}`} src={dish} alt="dish-table" width="682" />
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
              <Link to={"/login"}>
              <button className={styles["login"]}>login</button>
              </Link>
              
            </div>
            <div>
              <section className={styles["register-form"]}>
                <p className={styles["signup"]}>Sign Up</p>
                <form onSubmit={handleSubmit} className={styles["label-input"]}>
                  <label className={styles["email-label"]} for="email">Email Adress:</label>
                  <br />
                  <input className={styles["email-input"]} type="text" name="email" placeholder="Enter your email adress" />
                  
                  <br />

                  <label className={styles["email-label"]} for="pass">Password:</label>
                  <br />
                  <input className={styles["email-input"]} type="text" name="password" placeholder="Enter your password" />
                  <br />
                  <label className={styles["email-label"]} for="num">Phone Number:</label>
                  <br />
                  <input className={styles["email-input"]} type="text" name='phone' placeholder="Enter your phone number" />
                  <br />
                  <div className={styles["submit"]}>
                    <input className={styles["submit-input"]} type="submit" value="Sign Up" />
                  </div>
                  <button className={styles["oauth"]}>
                    <img className={styles["g-pic"]}
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
        <Footer/>
        </body>
      </Fragment>
    );
  }


export default withNavigate(Register);
