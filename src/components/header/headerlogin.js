import React, {Fragment} from "react"
import { Link } from "react-router-dom";    
import styles from '../header/headerlogin.module.css'
import coffee from "../../assets/img/coffee-logo.png";
import search from "../../assets/img/search-icon.png";
import msg from "../../assets/img/msg-icon.png";
import beard from "../../assets/img/beard-man-icon.jpg";


const HeaderLogin = () => {
    return (
        <Fragment>
        <header class={styles["header-home"]} >


<aside class={`${styles["left-header"]}`}>
  <img class={`${styles["coffee-logos"]}`}
    src={coffee}
    alt="coffee-icon"
  />
  <span class={`${styles["coffeeshop"]}`}>Coffee Shop</span>
</aside>
<aside class={`${styles["center-header"]}`}>
<Link to="/" className={`${styles["link"]}`}>
  <p class={`${styles["home"]}`}>Home</p>
  </Link>
  
  <Link to="/products" className={`${styles["link"]}`}>
  <p class={`${styles["product"]}`}>Product</p>
  </Link>
  
  <Link to="/payment" className={`${styles["link"]}`}>
  <p class={`${styles["cart"]}`}>Your Cart</p>
  </Link>
  <Link to="/history" className={`${styles["link"]}`}>
  <p class={`${styles["history"]}`}>History</p>
  </Link>
</aside>
<aside class={`${styles["right-header"]}`}>
  <p>Login</p>

  <button
    type="button"
    class={`btn btn-primary ${styles["button-sign-up"]}`}
  >
    Sign Up
  </button>
</aside>
</header>
          </Fragment>
    )
}

export default HeaderLogin