import React, { Fragment, useEffect, useState } from "react";
import styles from "../page-admin/style-admin/product-admin.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import ProductCardAdmin from "../components-admin/product";
import PromoCardAdmin from "../components-admin/promo";
import NavBar from "../components/header/NavBar";
import { Link } from "react-router-dom";
import withNavigate from "../helpers/withNavigate";
import { getProduct } from "../helpers/tools";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/footer";
import HeaderAdmin from "../components-admin/header/header";

const ProductsAdmin = ({ navigate }) => {
  const [param, setParam] = useState({
    filter: "",
    sort: "",
    order: "desc",
  });

  const getAllProduct = async () => {
    try {
      const result = await getProduct(param);
      // setAllProduct(result.data.result);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const handleNonCofee = async () => {
    try {
      const body = { ...param, filter: "non-coffee", sort: "", order: "asc" };
      setParam(body);
      const result = await getProduct(body);
      // setAllProduct(result.data.result);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFavorite = async () => {
    try {
      const body = {
        ...param,
        sort: "most-popular",
        order: "desc",
        filter: "",
      };
      setParam(body);
      const result = await getProduct(body);
      // setAllProduct(result.data.result);
      navigate(`/products/${param.filter}`);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFood = async () => {
    try {
      const body = { ...param, filter: "food", sort: "", order: "asc" };
      setParam(body);
      const result = await getProduct(body);
      // setAllProduct(result.data.result);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCoffee = async () => {
    try {
      const body = { ...param, filter: "coffee", sort: "", order: "asc" };
      setParam(body);
      const result = await getProduct(body);
      // navigate(`/products/${param.category}`)
      // setAllProduct(result.data.result);
      navigate(`/products/${param.filter}`);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };

  //destructuring stateGlobal
  const { products, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log(`state global:`, stateGlobal);
  console.log(`data product global:`, products);
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "UPDATE_NAME" });
    }, 2000);

    getAllProduct();
  }, []);

  useDocumentTitle("Products Admin");

  return (
    <Fragment>
      <body className={` ${styles["body-product"]}`}>
      <main className={`container-fluid ${styles["main-product"]}`}>
        <HeaderAdmin />
        <section
          className={`container-fluid text-dark ${styles["sub-product"]}`}
        >
          <div className="row align-items-center">
            <section className={`col-4 border w-25 ${styles["box-side"]}`}>
              <h1 className={`text-center ${styles["promoforyou"]}`}>
                Promo for you
              </h1>

              <br />
              <p className={`text-center ${styles["coupons"]}`}>
                Coupons will be updated every weeks. <br />
                Check them out!
              </p>
              <PromoCardAdmin />
              <div className="text-center d-grid gap-2 col-9 mx-auto">
                <button
                  type="button"
                  className={`btn btn-primary btn-lg ${styles["button-product"]}`}
                >
                  Apply Coupon
                </button>
              </div>
              <p
                className={`${styles["term"]}  ${styles["font-weight: bold"]}`}
              >
                Terms and Condition <br />
              </p>
              <p className={styles["ruleterm"]}>
                1. You can only apply 1 coupon per day <br />
                2. It only for dine in <br />
                3. Buy 1 get 1 only for new user <br />
                4. Should make member card to apply coupon
              </p>
              <div className="text-center d-grid gap-2 col-9 mx-auto">
              <Link to={"/new-promo"}>
                <button
                  type="button"
                  className={`btn btn-primary btn-lg ${styles["add-new"]}`}
                >
                  Add new promo
                </button>
                </Link>
              </div>
            </section>

            <section
              className={`col-8 border w-75 row align-items-start ${styles["main-side"]}`}
            >
              <div className="container text-center">
                <aside
                  className={`row align-items-start ${styles["sub-category"]}`}
                >
                  <aside
                    className={`col text-decoration-underline align-middle ${styles["fav-prod"]}`}
                  >
                    <p onClick={handleFavorite}>Favorite Product</p>
                  </aside>
                  <aside
                    onClick={() => {
                      // navigate(`/products/${param.filter}`)
                      handleCoffee();
                    }}
                    className={`col  ${styles["category"]}`}
                  >
                    Coffee
                  </aside>
                  <aside
                    onClick={handleNonCofee}
                    className={`col  ${styles["category"]}`}
                  >
                    Non Coffee
                  </aside>
                  <aside
                    onClick={handleFood}
                    className={`col ${styles["category"]}`}
                  >
                    Foods
                  </aside>
                  <aside className={`col ${styles["category"]}`}>Add-on</aside>
                </aside>
              </div>
              <aside className={`"container text-center ${styles["sub-list"]}`}>
                <div
                  className={`"container text-center ${styles["list-products"]}`}
                >
                  <aside
                    className={`row align-items-start ${styles["prod-wrap"]}`}
                  >
                    {products.map((product) => {
                      return (
                        <ProductCardAdmin
                          name={product.name}
                          price={"IDR " + product.price}
                          image={product.image}
                          key={product.id}
                        />
                      );
                    })}
                  </aside>
                </div>
                
              </aside>
              <div className="text-center d-grid gap-2 col-9 mx-auto">
              <Link to={"/new-product"}>
                <button
                  type="button"
                  className={`btn btn-primary btn-lg ${styles["add-product"]}`}
                >
                  Add new product
                </button>
                </Link>
              </div>
            </section>
          </div>
        </section>
        <Footer />
      </main>
      </body>
    </Fragment>
  );
};

export default withNavigate(ProductsAdmin);
