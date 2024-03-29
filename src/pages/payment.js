import React, { useState, useEffect, Fragment } from "react";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/footer";
import { useDocumentTitle } from "../helpers/page-title";
import { getProfile, getListCartApi } from "../helpers/tools";
import withNavigate from "../helpers/withNavigate";
import { useDispatch, useSelector } from "react-redux";
import styles from "../style/payment.module.css";
import card from "../assets/images/card-pic.png";
import bank from "../assets/images/bank-pic.png";
import cod from "../assets/images/cod-pic.png";
import PaymentCard from "../components/cards/paymentCard";
import { addToCart } from "../redux/reducer/cart2";
import paymentAction from "../redux/action/cart";

const Payment = ({ navigate }) => {
  const cartContents = useSelector((state) => state.transactionReducer);
  const itemCarts = cartContents.cart;
  const itemCartso = cartContents.cart[0]
  const { product } = useSelector((state) => state.homeReducer);
  useDocumentTitle("Payment");
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const shipping = 10000;

  const [profile, setProfile] = useState({});
  const [cartItems, setCartItems] = useState();
  const dispatch = useDispatch();
  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      setProfile(result.data.result[0]);
    } catch (error) {
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };
  let def = itemCarts.length === 1 ? itemCarts.map((item) => {
    return item.subtotal ? item.subtotal :item.total_order
  }) : 0
  // console.log(itemCarts);

  let sumNum = itemCarts.length === 1  ? Number(def) : 0;
  // console.log(itemCarts);
  if (itemCarts === undefined) {
    console.log("kosong");
  } else if (itemCarts.length > 1 && itemCarts.length !== 1) {
    itemCarts.forEach((value) => {
      console.log(value.subtotal);
      sumNum += Number(value.subtotal ? value.subtotal :value.total_order);
    });
  }

  console.log(sumNum);


  const tax = sumNum * 0.1;
  const finalPrice = rupiah(sumNum + tax + shipping);
  const getDataCart = async () => {
    try {
      const result = await getListCartApi();
      setCartItems(result.data.result);
      // dispatch(paymentAction.addtoCartActions(result.data.result))
      // dispatch({ type: "ADD_CART", payload: result.data.result });
    } catch (error) {
      console.error(error);
    }
  };
  const handleConfirm = () => {
    dispatch(paymentAction.createTransActions(itemCarts));
    navigate("/history");
    dispatch(paymentAction.cartReset())
  };
  // console.log(cartItems);
  useEffect(() => {
    getDataCart();
    getDataProfile();
  }, []);

  return (
    <Fragment>
      <NavBar />
      {/* <main className={` ${styles["body-pay"]}`}> */}
        <main className={`container ${styles["main-pay"]}`}>
          <p className={` ${styles["checkout"]}`}>
            Checkout your <br /> item now!
          </p>
          <section className={`container ${styles["main-sec"]}`}>
            <div className={`row ${styles["main-third"]}`}>
              <aside className={`col-5 container ${styles["summary"]}`}>
                <p className={` ${styles["fontsummary"]}`}> Order Summary</p>
                <p className={` ${styles["forcs"]}`}>for you</p>

                {
                  itemCarts === undefined ? (
                    <PaymentCard />
                  ) : (
                    // <PaymentCard />
                    itemCarts &&
                    itemCarts.map((item, idx) => {
                      // console.log(item.id_product);
                      return (
                        //
                        <PaymentCard
                          key={item.id_product}
                          products_name={item.products_name}
                          total_order={item.subtotal === undefined
                            ? item.total_order
                            : item.subtotal}
                          subtotal={item.subtotal}
                          quantity={
                            item.quantityCopy === undefined
                              ? item.quantity
                              : item.quantityCopy
                          }
                          image={item.image}
                          size={item.size}
                          id={item.id_product}
                        />
                      );
                    })
                  )

                  // )
                }
                <div className={`${styles["dash"]}`}>
                  <p>-----------------------------------------------</p>
                </div>

                <div className={` row ${styles["subtotal-wrap"]}`}>
                  <div className={`col-md-8 ${styles["subtotal"]}`}>
                    SUBTOTAL <br />
                    TAX 10% <br />
                    SHIPPING
                  </div>
                  <div className={`col-6 col-md-4 ${styles["idr"]}`}>
                    {rupiah(sumNum)}
                    <br />
                    {rupiah(tax)} <br />
                    {rupiah(shipping)}
                  </div>
                </div>

                <div className={` row ${styles["subtotal-wrap"]}`}>
                  <div className={`col-md-8 ${styles["total"]}`}>
                    <b>TOTAL</b> <br />
                  </div>
                  <div className={`col-6 col-md-4 ${styles["idr150"]}`}>
                    <b>{finalPrice}</b>
                  </div>
                </div>
              </aside>

              <aside className={`container col-5 ${styles["adress-pay"]}`}>
                <div className="row">
                  <div className="col-md-8">
                    <p className={`container ${styles["adress-details"]}`}>
                      Adress Details
                    </p>
                  </div>
                  <div className={`col-6 col-md-4 ${styles["edit"]}`}>
                    <p>edit</p>
                  </div>
                </div>

                <section className={` ${styles["section-adress"]}`}>
                  <div className={` ${styles["down"]}`}>
                    <p className={` ${styles["deliv"]}`}>
                      {" "}
                      <u>
                        {" "}
                        <b>Delivery</b> to {profile.name}
                      </u>
                    </p>
                    <div className={` ${styles["deliv-2"]}`}>
                      <u> {profile.address}</u> <br />
                      <p>{profile.mobile_number}</p>
                    </div>
                  </div>
                </section>

                <p className={` ${styles["method"]}`}>Payment method</p>
                <section className={` ${styles["border-payment"]}`}>
                  <div className={` ${styles["sub-payment"]}`}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className={`form-check-label ${styles["fontlabel"]}`}
                        htmlFor="flexRadioDefault1"
                      >
                        {" "}
                        <img
                          className={` ${styles["pay-pic"]}`}
                          src={card}
                          alt=""
                        />{" "}
                        Card{" "}
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className={`form-check-label ${styles["fontlabel"]}`}
                        htmlFor="flexRadioDefault2"
                      >
                        {" "}
                        <img
                          className={` ${styles["pay-pic"]}`}
                          src={bank}
                          alt=""
                        />{" "}
                        Bank account{" "}
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className={`form-check-label ${styles["fontlabel"]}`}
                        htmlFor="flexRadioDefault2"
                      >
                        {" "}
                        <img
                          className={` ${styles["pay-pic"]}`}
                          src={cod}
                          alt=""
                        />{" "}
                        Cash on delivery{" "}
                      </label>
                    </div>
                  </div>
                </section>
                <button
                  onClick={handleConfirm}
                  className={` ${styles["confirm"]}`}
                >
                  Confirm and Pay
                </button>
              </aside>
            </div>
          </section>
        </main>
      {/* </main> */}
      <Footer />
    </Fragment>
  );
};

export default withNavigate(Payment);
