import React, { useState, useEffect, Fragment } from "react";
import Footer from "../components/footer/footer";
import { useDocumentTitle } from "../helpers/page-title";
import NavBar from "../components/header/NavBar";
import { addCartApi, getProductById } from "../helpers/tools";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import withNavigate from "../helpers/withNavigate";

import styles from "../style/detail-products.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import r from "../assets/images/r.png";
import l from "../assets/images/l.png";
import xl from "../assets/images/xl.png";
import plus from "../assets/images/plus.png";
import min from "../assets/images/min.png";
import { addToCarts } from "../redux/reducer/cart2";
import paymentAction from "../redux/action/cart";

const DetailsProducts = ({ navigate }) => {
  useDocumentTitle("Product Detail");
  const { id } = useParams();

  const [detail, setDetail] = useState({});
  const [detailImage, setDetailImage] = useState({});
  const [counter, setCounter] = useState(1);
  const [size, setSize] = useState("Regular");
  const [price, setPrice] = useState({});
  const [base, setBase] = useState({});
  const [cart, setCart] = useState({});
  const [cartContent, setcartContent] = useState({});
  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [prodId, setProdId] = useState(null);
  const [selects, setSelects] = useState(false);
  const [selects2, setSelects2] = useState(false);
  const [selects3, setSelects3] = useState(false);
  // console.log(detail);
  const getDataProduct = async () => {
    try {
      const result = await getProductById(id);
      setDetail(result.data.result[0]);
      setProdId(Number(result.data.result[0].id));
      setBody({
        ...body,
        products_name: result.data.result[0].name,
        image: result.data.result[0].image,
        id_product: Number(result.data.result[0].id),
        total_order: result.data.result[0].price,
      });
      const imgDetail = result.data.result[0].image;
      setDetailImage(imgDetail);

      const basePrice = result.data.result[0].price;
      setPrice(basePrice);
      setBase(basePrice);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandlePlus = () => {
    const add = counter + 1;
    setCounter(add);
    setPrice(base * add);
    setBody({
      ...body,
      total_order: base * add,
      quantity: add,
    });
  };
  const onHandleMinus = () => {
    if (counter >= 1) {
      const reduce = counter - 1;
      setCounter(reduce);
      setPrice(base * reduce);
      setBody({
        ...body,
        total_order: base * reduce,
        quantity: reduce,
      });
    }
  };

  const onHandleSizeL = () => {
    const finalSizeL = "Large";
    setSize(finalSizeL);
    setBody({ ...body, size: finalSizeL });
  };
  const onHandleSizeR = () => {
    const finalSizeR = "Regular";
    setSize(finalSizeR);
    setBody({ ...body, size: finalSizeR });
  };
  const onHandleSizeXl = () => {
    const finalSizeXl = "Xtra Large";
    setSize(finalSizeXl);
    setBody({ ...body, size: finalSizeXl });
  };

  const productReview = [{
    image: detailImage,
    product_name: detail.name,
    quantity: counter,
    size_product_name: size,
    totalPrice: price,
    id_product: prodId,
  }];

  const [body, setBody] = useState({
    products_name: null,
    size: "Regular",
    quantity: 1,
    delivery_method: "Door Delivery",
    total_order: null,
    image: null,
    id_product: null,
  });
  console.log(body);
  const addToCart = async () => {
    setcartContent(productReview);
    // dispatch({ type: "ADD_CART", payload: productReview });
    // dispatch(addToCarts(productReview));
    console.log(body);
    dispatch(paymentAction.addtoCartActions(body))
    // dispatch(paymentAction.updateCartItem(prodId, counter + 1 ))
    try {
      const addItemRequest = await addCartApi(body);
      toast.success("Item successfully added to cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const { cartContents } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    // console.log('tes');
    // dispatch({ type: "ADD_CART", payload: cartContent });
    // dispatch(addToCarts({cartContent}));
    try {
      const addItemRequest = await addCartApi(body);
      toast.success("Item successfully added to cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      console.error(err);
    }
    navigate("/payment");
  };

  useEffect(() => {
    getDataProduct();
  }, [cartContents]);

  return (
    <Fragment>
      <NavBar />
      {/* <main className={`${styles["body-detail"]}`}> */}
        <main className={`container ${styles["main-detail"]}`}>
          <p className={`container ${styles["promo"]}`}>
            Favorite & Promo &gt; <b>Cold Brew</b>{" "}
          </p>
          <section className="row">
            <div className={`col-5 ${styles["left-content"]}`}>
              <div className={`${styles["main-left"]}`}>
                <img
                  className={`img-fluid ${styles["brew"]}`}
                  src={detailImage}
                  alt=""
                />
                <p className={`${styles["coldbrew"]}`}>{detail.name}</p>
                <p className={`${styles["idr30"]}`}>{`IDR ${price}`}</p>
                <button
                  onClick={() => {
                    addToCart();
                  }}
                  className={`${styles["addcart"]}`}
                >
                  Add to Cart
                </button>
                <ToastContainer /> <br /> <br />
                <button className={`${styles["askstaff"]}`}>Ask a Staff</button>
              </div>
            </div>
            <div className={`col-6 ${styles["right-content"]}`}>
              <aside className={`container ${styles["main-content"]}`}>
                <p className={`${styles["schedule"]}`}>
                  Delivery only on{" "}
                  <b>
                    Monday to <br /> friday{" "}
                  </b>{" "}
                  at <b> 1 - 7 pm </b>{" "}
                </p>
                <p className={`${styles["brewmethod"]}`}>
                  {" "}
                  {detail.description}
                </p>
                <p className={`${styles["size"]}`}> Choose a size</p>
                <div className={`${styles["font-size"]}`}>
                  <span className={`${styles["r"]}`}>
                    {" "}
                    <img
                      onClick={() => {
                        setSelects(!selects);
                        setSelects2(false);
                        setSelects3(false);
                        onHandleSizeR();
                      }}
                      className={
                        selects
                          ? `${styles["sizePic-none"]}`
                          : `${styles["sizePic"]}`
                      }
                      src={r}
                      alt="r-size"
                    />
                  </span>
                  <span className={`${styles["l"]}`}>
                    {" "}
                    <img
                      onClick={() => {
                        setSelects(false);
                        setSelects2(!selects2);
                        setSelects3(false);
                        onHandleSizeL();
                      }}
                      className={
                        selects2
                          ? `${styles["sizePic-none"]}`
                          : `${styles["sizePic"]}`
                      }
                      src={l}
                      alt="l-size"
                    />
                  </span>
                  <span className={`${styles["xl"]}`}>
                    {" "}
                    <img
                      onClick={() => {
                        setSelects(false);
                        setSelects2(false);
                        setSelects3(!selects3);
                        onHandleSizeXl();
                      }}
                      className={
                        selects3
                          ? `${styles["sizePic-none"]}`
                          : `${styles["sizePic"]}`
                      }
                      src={xl}
                      alt="xl-size"
                    />
                  </span>
                </div>
              </aside>
              <p className={`${styles["choose"]}`}>Choose Delivery Methods</p>
              <aside className={`container ${styles["button"]}`}>
                <div className={`row ${styles["deliv-wrap"]}`}>
                  <div className={`col-sm ${styles["dinein-wrap"]}`}>
                    <button
                      onClick={() => {
                        setSelect(!select);
                        setSelect2(false);
                        setSelect3(false);
                        setBody({ ...body, delivery_method: "Dine in" });
                      }}
                      className={
                        select ? `${styles["dinein"]}` : `${styles["door"]}`
                      }
                    >
                      Dine in
                    </button>
                  </div>
                  <div className={`col-sm ${styles["door-wrap"]}`}>
                    <button
                      onClick={() => {
                        setSelect(false);
                        setSelect2(!select2);
                        setSelect3(false);
                        setBody({ ...body, delivery_method: "Door Delivery" });
                      }}
                      className={
                        select2 ? `${styles["dinein"]}` : `${styles["door"]}`
                      }
                    >
                      Door Delivery
                    </button>
                  </div>
                  <div className={`col-sm ${styles["pickup-wrap"]}`}>
                    <button
                      onClick={() => {
                        setSelect(false);
                        setSelect2(false);
                        setSelect3(!select3);
                        setBody({ ...body, delivery_method: "Pick up" });
                      }}
                      className={
                        select3 ? `${styles["dinein"]}` : `${styles["door"]}`
                      }
                    >
                      Pick up
                    </button>
                  </div>
                </div>
              </aside>
              <aside className={`${styles["time-wrap"]}`}>
                <span className={`${styles["settime"]}`}>Set time :</span>
                <input
                  className={`${styles["contentset"]}`}
                  type="text"
                  placeholder="Enter the time you'll arrived"
                />
              </aside>
            </div>
          </section>
          <section className={`container ${styles["floating-bar"]}`}>
            <div className={`row ${styles["floating-sec"]}`}>
              <div className={`col-8 ${styles["left-bottom"]}`}>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <img
                        className={`img-fluid ${styles["brew2"]}`}
                        src={detailImage}
                        alt=""
                      />
                    </div>
                    <div className={`col-6 ${styles["result"]}`}>
                      <b>COLD BREW</b> <br /> x{counter} {size}
                      <p></p>
                    </div>
                    <div className={`col ${styles["qty"]}`}>
                      <img
                        onClick={onHandleMinus}
                        className={`${styles["min"]}`}
                        src={min}
                        alt=""
                      />{" "}
                      {counter}
                      <img
                        onClick={onHandlePlus}
                        className={`col ${styles["plus"]}`}
                        src={plus}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-4 ${styles["right-bottom"]}`}>
                <button
                  onClick={handleCheckout}
                  className={`${styles["button-check"]}`}
                >
                  Checkout
                </button>
              </div>
            </div>
          </section>
        </main>
      {/* </main> */}
      <Footer />
    </Fragment>
  );
};

export default withNavigate(DetailsProducts);
