import React, { Fragment, useEffect, useState, useMemo } from "react";
import styles from "../page-admin/style-admin/product-admin.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import ProductCardAdmin from "../components-admin/product";
import PromoCardAdmin from "../components-admin/promo";
import NavBar from "../components/header/NavBar";
import { Link } from "react-router-dom";
import withNavigate from "../helpers/withNavigate";
import { getProducts } from "../helpers/tools";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/footer";
import HeaderAdmin from "../components-admin/header/header";
import { useNavigate, useLocation } from "react-router-dom";
import { setProduct } from "../redux/action";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const ProductsAdmin = ( props ) => {

  const getQuery = useQuery();
  const [counter, setCounter] = useState(1);

  const [param, setParam] = useState({
    search: getQuery.get("search") ?? "",
    sort: getQuery.get("sort") ?? "",
    filter: getQuery.get("filter") ?? "",
    page: getQuery.get("page") ?? 1,
  });

  const [searchProduct, setSearchProduct] = useState("");

  const getAllProduct = async () => {
    try {
      const body = {
        search: getQuery.get(`${searchProduct}`) ?? "",
        filter: "",
        sort: "asc",
      };
      const result = await getProducts(body, counter);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
      dispatch({ type: "LOADING_PAGE_FALSE" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNonCofee = async () => {
    try {
      const body = { ...param, filter: "non-coffee", sort: "" };
      setParam(body);
      props.setSearchParams(body);
      const result = await getProducts(body, counter);
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
        sort: "desc",
        filter: "",
      };
      setParam(body);
      props.setSearchParams(body);
      const result = await getProducts(body, counter);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFood = async () => {
    try {
      const body = { ...param, filter: "food", sort: "", sort: "asc" };
      setParam(body);
      props.setSearchParams(body);
      const result = await getProducts(body, counter);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCoffee = async () => {
    try {
      const body = { ...param, filter: "coffee", sort: "", sort: "asc" };
      setParam(body);
      props.setSearchParams(body);
      const result = await getProducts(body, counter);

      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const mostExpensive = async () => {
    try {
      const body = {
        ...param,
        filter: "",
        sort: "most-expensive",
        // sort: "desc",
      };
      setParam(body);
      props.setSearchParams(body);
      const result = await getProducts(body, counter);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const cheapest = async () => {
    try {
      const body = { ...param, filter: "", sort: "cheapest" };
      setParam(body);
      props.setSearchParams(body);
      const result = await getProducts(body, counter);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const newest = async () => {
    try {
      const body = { ...param, filter: "", sort: "newest" };
      setParam(body);
      props.setSearchParams(body);
      const result = await getProducts(body, counter);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const oldest = async () => {
    try {
      const body = { ...param, filter: "", sort: "oldest"};
      setParam(body);
      props.setSearchParams(body);
      const result = await getProducts(body, counter);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };

  const next = async () => {
    const tempCount = counter + 1;
    setCounter(tempCount);

    try {

      const result = await getProducts(param, tempCount);
      console.log("angka", counter);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const prev = async () => {
    const tempCount = counter - 1;
    setCounter(tempCount);
    try {
      const result = await getProducts(param, tempCount);
      console.log("angka", counter);
      dispatch(setProduct(result.data.result));
    } catch (error) {
      console.log(error);
    }
  };

  const { product } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOADING_PAGE" });
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
                    {product.map((product) => {
                      return (
                        <ProductCardAdmin
                          name={product.name}
                          price={"IDR " + product.price}
                          image={product.image}
                          dataId={product.id}
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
