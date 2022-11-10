import React, { Component, Fragment } from "react";
import styles from "../style/forgotpw.module.css";
import { useDocumentTitle } from "../helpers/page-title";

import Footer from "../components/footer/footer";

class ForgotPw extends Component {
  state = {
    tittle: "Register - Haya Coffee",
    name: "",
  };
  componentDidMount(){
    document.title = this.state.tittle
  }

    render() {
return (
<Fragment>
        <body className={`${styles["main-body"]}`}>
          
        
        <main className={`container ${styles["main-forgot"]}`}>
          <section className={`container ${styles["uppertext"]}`}>
            <div className={`container ${styles["forgot"]}`}>
              <p>Forgot your password?</p>
            </div>
            <div className={`container ${styles["worry"]}`}>
              Don't worry, we got your back!
            </div>
          </section>
          <section className={`container row ${styles["email-input"]}`}>
            <input
              className={`col-sm-8 ${styles["content"]}`}
              placeholder="Enter your email adress to get link"
            />
            <button className={`col-sm-4 ${styles["send"]}`}>send</button>
          </section>
          <section className={`container ${styles["clickhere"]}`}>
            <p>
              Click here if you didn't receive any link <br /> in 2 minutes
            </p>
          </section>
          <section className={`container ${styles["bottom-content"]}`}>
            <button className={` ${styles["resend"]}`}>
              Resend Link
            </button>
            <p className={`${styles["timer"]}`}> 01:54</p>
            </section>
            
          
        </main>
        </body>
        <Footer />
      </Fragment>
)
    } 
      
    
  }


export default ForgotPw;
