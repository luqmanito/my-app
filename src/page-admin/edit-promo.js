import React, { useState, useEffect, Fragment } from "react";
import HeaderAdmin from "../components-admin/header/header";
import styles from "../page-admin/style-admin/edit-promo.module.css";
import Footer from "../components/footer/footer";
import upload from "../assets/img/upload.png";
import r from "../assets/img/r.png";
import l from "../assets/img/l.png";
import xl from "../assets/img/xl.png";
import size1 from "../assets/img/250.png";
import size2 from "../assets/img/300.png";
import size3 from "../assets/img/500.png";
import PromoCardAdmin from "../components-admin/promo";
import { editPromo, getPromo } from "../helpers/tools";

const EditPromo = () => {

  const [promo, setPromo] = useState({});
  const [body, setBody] = useState({});
  const [idPromo, setIdPromo] = useState(null)
  const [name, setName] = useState({});
  const [price, setPrice] = useState({});
  const [desc, setDesc] = useState({});
  
  const handleName = (e) => {
    setBody({ ...body, 
      name: e.target.value,
     });
  };
  const handlePrice = (e) => {
    setBody({ ...body, 
      price: e.target.value, 
     });
  };
  const handleDesc = (e) => {
    setBody({ ...body,   
     description: e.target.value, 
     });
  };

  
  const getDataPromo = async () => {
    try {
      const result = await getPromo();
      setPromo(result.data.result[0]);
      console.log(result.data.result[4]);
      const useResult = result.data.result[4]
      setName(useResult.name)
      setPrice(useResult.price)
      setDesc(useResult.description)
      const id = result.data.result[0].id
      setIdPromo(id)
    } catch (error) {
      if (error.response.data.statusCode === 403) {
        // navigate("/login");
      }
    }
  };
  
  const handleSubmit = async (event) => {
    try {
      const result = await editPromo(body, idPromo);
      // console.log(event.target.email);
      setBody({})
      alert("Update Data success");
      // window.location.reload()
    } catch (error) {
      console.log(error);
     
    }
  };
  
  useEffect(() => {
    getDataPromo();
  }, []);



  return (
    <Fragment>
      <HeaderAdmin />
      <main className={`container-fluid ${styles["main-head"]}`}>
      <main className={`container-fluid ${styles["main-product"]}`}>
        <div className={`row ${styles["row-product"]}`}>
          <p className={`container ${styles["promo"]}`}>
            Favorite & Promo &gt; <b>Edit promo</b>{" "}
          </p>
          <section className={`col-6 ${styles["left-content"]}`}>
            < PromoCardAdmin />
           
            <form action=""></form>
            <br />
            <p className={`${styles["exp"]}`}>Expire date :</p>
            <div className={`dropdown2 ${styles["endhour"]}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles["buttonstart"]}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                October 7th 2020
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
                October 10th 2020
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

            <p className={`${styles["inp-coupon"]}`}>Input promo code :</p>

            <form action="" className={`${styles["bef-coupons"]}`}>
            
            <input className={styles["coupon-code"]} type="text" name="email" placeholder="FNPR15RG" />
            </form>
            
          </section>

          <section className={`col-6 ${styles["right-content"]}`}>
            <form>
              <div class="mb-3">
                <label for="exampleInputName" className={`form-label ${styles["name"]}`}>
                  Name :
                </label>
                <input onChange={handleName}
                  type="email"
                  className={`form-control ${styles["form-cont"]}`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={name}
                ></input>
              </div>
              <div class="mb-3">
                <label for="exampleInputPrice" className={`form-label ${styles["price"]}`}>
                  Normal Price :
                </label>
                <input onChange={handlePrice}
                  type="text"
                  className={`form-control ${styles["form-cont"]}`}
                  id="exampleInputPassword1"
                  placeholder={price}
                ></input>
              </div>
              <div class="mb-3">
                <label for="exampleInputPrice" className={`form-label ${styles["desc"]}`}>
                  Description :
                </label>
                <input onChange={handleDesc}
                  type="text"
                  className={`form-control ${styles["form-cont"]}`}
                  id="exampleInputPassword1"
                  placeholder={desc}
                ></input>
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

            <p className={`${styles["enter"]}`}>Enter the discount :</p>
            <div className={`dropdown2 ${styles["endhour"]}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles["buttondisc"]}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                20%
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

            <div className="text-center d-grid gap-2 col-9 mx-auto">
                  <button onClick={handleSubmit}
                    type="button"
                    className={`btn btn-primary btn-lg ${styles["takepic4"]}`}
                  >
                    Save promo
                  </button>
                </div>
                <br />
                
            </aside>
          </section>
        </div>
      </main>
      </main>
      <Footer />
    </Fragment>
  );
};

export default EditPromo;
