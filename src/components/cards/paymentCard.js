import React, { useState, useEffect, Fragment } from "react";
import styles from "../cards/paymentCard.module.css";
import plus from "../../assets/images/plus.png";
import min from "../../assets/images/min.png";
import del from "../../assets/images/deletex.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducer/cart2";


const PaymentCard = (props) => {
  const { cartContents } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(props.quantity);
  const [grandtotal, setGrandtotal] = useState(props.total_order);
  const [cartContent, setcartContent] = useState({});
  const productReview = {
    product_id: props.id,
    products_name: props.products_name,
    total_order: props.total_order,
    quantity: props.quantity,
    image: props.image,
    size: props.size,
    key: props.id,
  };
  console.log(cartContent);
  const basePrice = props.total_order / props.quantity;

  const onHandleMinus = () => {
    if (counter >= 1) {
      const reduce = Number(counter) - 1;
      setCounter(reduce);
      setGrandtotal(basePrice * reduce);
      // setPrice(base * reduce);
      // setBody({
      //   ...body,
      //   total_order: base * reduce,
      //   quantity: reduce,
      // });
    }
  };
  const onHandlePlus = () => {
    const add = Number(counter) + 1;
    setCounter(add);
    setGrandtotal(basePrice * add);
    setcartContent(productReview);
    // dispatch({ type: "ADD_CART", payload: cartContent });
    dispatch(addToCart({
      payload: cartContent
      }));
    // setPrice(base * add);
    // setBody({
    //   ...body,
    //   total_order: base * add,
    //   quantity: add,
    // });
  };

  const tax = "10%";
  const shipping = 10000;
  const finalPrice = cartContents.totalPrice + tax + shipping;
  const [subtotal, setSubtotal] = useState({});

  const handleTotalPrice = () => {
    setSubtotal(finalPrice);
    dispatch({ type: "ADD_TOTAL", payload: finalPrice });
  };

  useEffect(() => {
    handleTotalPrice();
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className={`col-sm  ${styles["hazelpay-content"]}`}>
          <img
            src={props.image}
            className={`img-fluid  ${styles["hazelpay"]}`}
            alt=""
          />
        </div>
        <div className={`col-sm ${styles["latte-content"]}`}>
          <p className={`${styles["hazel-font"]}`}>
            {props.products_name} <br /> {`x${counter} ${props.size} `}
          </p>
        </div>
        <div className="col-sm">
          <p className={`${styles["hazel-font"]}`}>IDR {grandtotal}</p>
          <img
            onClick={onHandlePlus}
            className={`${styles["plus-font"]}`}
            src={plus}
            alt="plus"
          />
          <img
            onClick={onHandleMinus}
            className={`${styles["min-font"]}`}
            src={min}
            alt="min"
          />
        </div>
      </div>
      {/* <div className={`${styles["dash"]}`}>
        <p>-----------------------------------------------</p>
      </div> */}
      {/* <div className={` row ${styles["subtotal-wrap"]}`}>
        <div className={`col-md-8 ${styles["subtotal"]}`}>
          SUBTOTAL <br />
          TAX & FEES <br />
          SHIPPING
        </div>
        <div className={`col-6 col-md-4 ${styles["idr"]}`}>
          IDR {cartContents.totalPrice} <br />
          IDR {tax} <br />
          IDR {shipping}
        </div>
      </div> */}
      {/* <div className={` row ${styles["subtotal-wrap"]}`}>
        <div className={`col-md-8 ${styles["total"]}`}>
          <b>TOTAL</b> <br />
        </div>
        <div className={`col-6 col-md-4 ${styles["idr150"]}`}>
          <b> IDR {finalPrice}</b>
        </div>
      </div> */}
      {/* <div className={` ${styles["box1"]}`}></div>
      <div className={` ${styles["box2"]}`}></div> */}
    </Fragment>
  );
};

export default PaymentCard;
