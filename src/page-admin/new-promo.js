import React, { useState, useEffect, Fragment } from "react";
import HeaderAdmin from "../components-admin/header/header";
import styles from "../page-admin/style-admin/new-promo.module.css";
import Footer from "../components/footer/footer";
import upload from "../assets/img/upload.png";
import r from "../assets/img/r.png";
import l from "../assets/img/l.png";
import xl from "../assets/img/xl.png";
import size1 from "../assets/img/250.png";
import size2 from "../assets/img/300.png";
import size3 from "../assets/img/500.png";
import { addPromo } from "../helpers/tools";

const NewPromo = () => {

const [body, setBody] = useState({});

const handlePrice = (e) => {
  setBody({ ...body, 
    price: e.target.value,
   });
};
const handleName = (e) => {
  setBody({ ...body, 
    name: e.target.value, 
   });
};
const handleDesc = (e) => {
  setBody({ ...body,   
   description: e.target.value, 
   });
};

const handleSubmit = async (event) => {
  try {
    const result = await addPromo(body);
    setBody({})
    alert("Update Data success");
    window.location.reload()
  } catch (error) {
    console.log(error);
   
  }
};


  return (
    <Fragment>
      <HeaderAdmin />
      
      <main className={`container-fluid ${styles["main-head"]}`}>
      <main className={`container-fluid ${styles["main-product"]}`}>
        <div className={`row ${styles["row-product"]}`}>
          <p className={`container ${styles["promo"]}`}>
            Favorite & Promo &gt; <b>Add new promo</b>{" "}
          </p>
          <section className={`col-6 ${styles["left-content"]}`}>
            <img src={upload} alt="" className={`${styles["upload"]}`} />
            <div className="text-center d-grid gap-2 col-9 mx-auto">
              <button
                type="button"
                className={`btn btn-primary btn-lg ${styles["takepic"]}`}
              >
                Take a picture
              </button>
              <br />
            </div>
            <div className="text-center d-grid gap-2 col-9 mx-auto">
              <button
                type="button"
                className={`btn btn-primary btn-lg ${styles["choosepic"]}`}
              >
               Choose from gallery
              </button>
            </div>
            <p className={`${styles["delivhour"]}`}>Enter the discount :</p>
            <div className={`dropdown1 ${styles["starthour"]}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles["buttonstart"]}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Input discount
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <p className={`${styles["exp"]}`}>Expire date :</p>
            <div className={`dropdown2 ${styles["endhour"]}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles["buttonstart"]}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select start date
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div className={`dropdown2 ${styles["input-stock"]}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles["buttonstart"]}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select end date
              </button>
              
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="asdq">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="qweqweq">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="qweqwe">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <p className={`${styles["inp-coupon"]}`}>Input coupon code :</p>

            <div className={`dropdown2 ${styles["input-stock"]}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles["buttonstart"]}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Input stock
              </button>
              
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="asdq">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="qweqweq">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="qweqwe">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            
          </section>

          <section className={`col-6 ${styles["right-content"]}`}>
            <form>
              <div class="mb-3">
                <label for="exampleInputName" className={`form-label ${styles["name"]}`}>
                  Name :
                </label>
                <input className={`form-control ${styles["form-cont"]}`} onChange={handleName} name="name" placeholder='Type promo name min. 50 characters'/>
                {/* <input onChange={{handleName}}
                  type="text"
                  className={`form-control ${styles["form-cont"]}`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type promo name min. 50 characters"
                  name="name"
                /> */}
              </div>
              <div class="mb-3">
                <label for="exampleInputPrice" className={`form-label ${styles["price"]}`}>
                  Normal Price :
                </label>
                <input className={`form-control ${styles["form-cont"]}`} onChange={handlePrice} name="price" placeholder='Type the normal price'/>
                {/* <input onChange={{handlePrice}}
                  type="text"
                  className={`form-control ${styles["form-cont"]}`}
                  id="exampleInputPassword1"
                  placeholder="Type the normal price"
                  name="price"
                /> */}
              </div>
              <div class="mb-3">
                <label for="exampleInputPrice" className={`form-label ${styles["desc"]}`}>
                  Description :
                </label>
                <input className={`form-control ${styles["form-cont"]}`} onChange={handleDesc} name="desc" placeholder='Describe your promo min. 150 characters'/>
                {/* <input onChange={{handleDesc}}
                  type="text"
                  className={`form-control ${styles["form-cont"]}`}
                  id="exampleInputPassword1"
                  placeholder="Describe your promo min. 150 characters"
                  name="desc"
                /> */}
              </div>
            </form>
            <p className={`container ${styles["inputsize"]}`}>
              Input product size :
            </p>
            <p className={`container ${styles["clicksize"]}`}>
              Click product size you want to use for this promo
            </p>
            <div className={`${styles["sizechoice"]}`}>
              <span className={`${styles["r-wrap"]}`}>
                {" "}
                <img className={`${styles["r"]}`} src={r} alt="" />
              </span>
              <span className={`${styles["l-wrap"]}`}>
                {" "}
                <img className={`${styles["l"]}`} src={l} alt="" />
              </span>
              <span className={`${styles["xl-wrap"]}`}>
                {" "}
                <img className={`${styles["xl"]}`} src={xl} alt="" />
              </span>
              <span className={`${styles["250gr-wrap"]}`}>
                {" "}
                <img className={`${styles["gr250"]}`} src={size1} alt="" />
              </span>
              <span className={`${styles["300gr-wrap"]}`}>
                {" "}
                <img className={`${styles["gr300"]}`} src={size2} alt="" />
              </span>
              <span className={`${styles["500gr-wrap"]}`}>
                {" "}
                <img className={`${styles["gr500"]}`} src={size3} alt="" />
              </span>
            </div>
            <p className={`container ${styles["delivmethod"]}`}>
              Input delivery methods :
            </p>
            <p className={`container ${styles["clickmethod"]}`}>
              Click methods you want to use for this promo
            </p>
            <div class="row align-items-center">
              <div class="col">
                <div className="text-center d-grid gap-2 col-9 mx-auto">
                  <button
                    type="button"
                    className={`btn btn-primary btn-lg ${styles["takepic1"]}`}
                  >
                    Home Delivery
                  </button>
                </div>
              </div>
              <div class="col">
                <div className="text-center d-grid gap-2 col-9 mx-auto">
                  <button
                    type="button"
                    className={`btn btn-primary btn-lg ${styles["takepic2"]}`}
                  >
                    Dine in
                  </button>
                </div>
              </div>
              <div class="col">
                <div className="text-center d-grid gap-2 col-9 mx-auto">
                  <button
                    type="button"
                    className={`btn btn-primary btn-lg ${styles["takepic3"]}`}
                  >
                    Take away
                  </button>
                </div>
              </div>
            </div>
            <br />
            <aside className={`container ${styles["last-button"]}`} >
            <div className="text-center d-grid gap-2 col-9 mx-auto">
                  <button onClick={handleSubmit}
                    type="button"
                    className={`btn btn-primary btn-lg ${styles["takepic4"]}`}
                  >
                    Save promo
                  </button>
                </div>
                <br />
                <div className="text-center d-grid gap-2 col-9 mx-auto">
                  <button
                    type="button"
                    className={`btn btn-primary btn-lg ${styles["takepic5"]}`}
                  >
                    Cancel
                  </button>
                </div>
            </aside>
          </section>
        </div>
      </main>
      </main>
      <Footer />
    </Fragment>
  );
};

export default NewPromo;
