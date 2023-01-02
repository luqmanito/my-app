import React, { useState, useEffect, Fragment, useRef } from "react";
import HeaderAdmin from "../components-admin/header/header";
import styles from "../page-admin/style-admin/edit-product.module.css";
import Footer from "../components/footer/footer";
import { Navigate, useParams } from "react-router-dom";
import upload from "../assets/images/upload.png";
import { getProductById } from "../helpers/tools";
import r from "../assets/images/r.png";
import l from "../assets/images/l.png";
import xl from "../assets/images/xl.png";
import size1 from "../assets/images/250.png";
import size2 from "../assets/images/300.png";
import size3 from "../assets/images/500.png";
import { useDocumentTitle } from "../helpers/page-title";
import { toast, ToastContainer } from "react-toastify";
import withNavigate from "../helpers/withNavigate";
import Upload from "../components-admin/upload";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../helpers/tools";

const EditProduct = ({navigate}) => {
  useDocumentTitle("Add New Product");

  const [body, setBody] = useState({});
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [price, setPrice] = useState({});
  const [base, setBase] = useState({});
  const [detailImage, setDetailImage] = useState({});
  const target = useRef(null);

  const { idProductStore } = useSelector((state) => state.idReducer);
  //   const dispatch = useDispatch();
  console.log(idProductStore);

  const getDataProduct = async () => {
    try {
      const result = await getProductById(idProductStore);
      setDetail(result.data.result[0]);
      const pre = "http://localhost:8070/";
      const imgDetail = result.data.result[0].image;
      setDetailImage(imgDetail);
      const basePrice = result.data.result[0].price;
      setPrice(basePrice);
      setBase(basePrice);
    } catch (error) {
      if (error.response.data.statusCode === 403) {
        console.log(error);
      }
    }
  };
  //   console.log(detail);

  const onImageUpload = (e) => {
    const files = e.target.files[0];
    setImage(files);
    setImagePreview(URL.createObjectURL(files));
    setBody({...body, image: e.target.files[0]})
  };

  const handlePrice = (e) => {
    setBody({ ...body, price: e.target.value });
  };
  const handleName = (e) => {
    setBody({ ...body, name: e.target.value });
  };
  const handleDesc = (e) => {
    setBody({ ...body, description: e.target.value });
  };
  
  // console.log(body.name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    if (body.name !== undefined) {
        data.append("name", body.name);
    }
    if (body.price !== undefined) {
        data.append("price", body.price);
    }
    if (body.description !== undefined) {
        data.append("description", body.description);
    }
    if (body.image !== undefined ) {
        data.append("imageUrl", body.image);
    }
console.log(data);
    try {
      const result = await editProduct(data, idProductStore);
      setBody({});
      toast.success("Edit product success", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      // navigate(`/detail-product-admin/${idProductStore}`)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataProduct();
    // getCart();
    // handleCheckout();
  }, []);

  return (
    <Fragment>
      <HeaderAdmin />
      <main className={`container-fluid ${styles["main-head"]}`}>
        <main className={`container-fluid ${styles["main-product"]}`}>
          <div className={`row ${styles["row-product"]}`}>
            <p className={`container ${styles["promo"]}`}>
              Favorite & Promo &gt; <b>Edit product</b>{" "}
            </p>
            <section className={`col-6 ${styles["left-content"]}`}>
              <Upload
                ref={target}
                onChange={(e) => onImageUpload(e)}
                img={imagePreview !== null ? imagePreview : detailImage}
                name="image"
              />
              <div className="text-center d-grid gap-2 col-9 mx-auto">
                <button
                  type="button"
                  className={`btn btn-primary btn-lg ${styles["takepic"]}`}
                >
                  Take a picture
                </button>
                <br />
              </div>
              {/* <div className="text-center d-grid gap-2 col-9 mx-auto">
              <button 
                type="button"
                className={`btn btn-primary btn-lg ${styles["choosepic"]}`}
                for="file-input"
              >
              Choose from gallery
              </button>
              
            </div> */}
              <p className={`${styles["delivhour"]}`}>Delivery Hour :</p>
              <div className={`dropdown1 ${styles["starthour"]}`}>
                <button
                  className={`btn btn-secondary dropdown-toggle ${styles["buttonstart"]}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select start hour
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
              <div className={`dropdown2 ${styles["endhour"]}`}>
                <button
                  className={`btn btn-secondary dropdown-toggle ${styles["buttonstart"]}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select end hour
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
              <p className={`${styles["inp-stock"]}`}>Input stock :</p>
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
                {/* <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} name="image" /> */}
                <div class="mb-3">
                  <label
                    for="exampleInputName"
                    className={`form-label ${styles["name"]}`}
                  >
                    Name :
                  </label>
                  <input
                    onChange={handleName}
                    type="text"
                    className={`form-control ${styles["form-cont"]}`}
                   
                    //   placeholder={detail.name}
                    defaultValue={detail.name}
                    name="name"
                  ></input>
                </div>
                <div class="mb-3">
                  <label
                    for="exampleInputPrice"
                    className={`form-label ${styles["price"]}`}
                  >
                    Price :
                  </label>
                  <input
                    onChange={handlePrice}
                    type="text"
                    className={`form-control ${styles["form-cont"]}`}
                    id="exampleInputPassword1"
                    defaultValue={detail.price}
                    name="price"
                  ></input>
                </div>
                <div class="mb-3">
                  <label
                    for="exampleInputPrice"
                    className={`form-label ${styles["desc"]}`}
                  >
                    Description :
                  </label>
                  <input
                    onChange={handleDesc}
                    type="text"
                    className={`form-control ${styles["form-cont"]}`}
                    id="exampleInputPassword1"
                    defaultValue={detail.description}
                    name="desc"
                  ></input>
                </div>
              </form>
              <p className={`container ${styles["inputsize"]}`}>
                Input product size :
              </p>
              <p className={`container ${styles["clicksize"]}`}>
                Click size you want to use for this product
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
                Click methods you want to use for this product
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
              <aside className={`container ${styles["last-button"]}`}>
                <div className="text-center d-grid gap-2 col-9 mx-auto">
                  <button
                    onClick={(e) => handleSubmit(e)}
                    type="button"
                    className={`btn btn-primary btn-lg ${styles["takepic4"]}`}
                  >
                    Save product
                  </button>
                  <ToastContainer />
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

export default withNavigate(EditProduct);
