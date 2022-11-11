import React, { Fragment, useEffect, useState, useMemo } from "react";
import styles from "../style/product.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import ProductCard from "../components/cards/product";
import PromoCard from "../components/cards/promo";
import NavBar from "../components/header/NavBar";
import withNavigate from "../helpers/withNavigate";
import { getProduct, getProducts } from "../helpers/tools";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/footer";
import IsLoading from "../components/loading/isLoading";
import { setProduct } from "../redux/action";

const Products = ({ navigate }) => {

  // const [product, setProduct] = useState([])

  const [param, setParam] = useState({
    filter: "",
    sort: "",
    order: "desc",
    page: 1,
  });

  const [query, setSearchProduct] = useState("");

  const getAllProduct = async () => {
    try {
      const result = await getProducts(param, counter);
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
      // navigate(`/products/${param.filter}`);
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
      // navigate(`/products/${param.filter}`);
      <Link to={`/products/${param.filter}`} />;
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
        order: "desc",
      };
      setParam(body);
      const result = await getProduct(body);
      // navigate(`/products/${param.category}`)
      // setAllProduct(result.data.result);
      // navigate(`/products/${param.filter}`);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };
  const cheapest = async () => {
    try {
      const body = { ...param, filter: "", sort: "cheapest", order: "asc" };
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
  const newest = async () => {
    try {
      const body = { ...param, filter: "", sort: "newest", order: "desc" };
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
  const oldest = async () => {
    try {
      const body = { ...param, filter: "", sort: "oldest", order: "asc" };
      setParam(body);
      const result = await getProduct(body);
      // navigate(`/products/${param.category}`)
      // setAllProduct(result.data.result);
      // navigate(`/products/${param.filter}`);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
    } catch (error) {
      console.log(error);
    }
  };

  const [counter, setCounter] = useState(1);

  const next = async () => {
    setCounter(counter + 1);
    console.log("itu", counter);

    try {
      const result = await getProducts(param, counter);
      // setAllProduct(result.data.result);
      console.log("angka", counter);
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
      // dispatch({ type: "UPDATE_PAGE", payload: { currentpage: counter } });
    } catch (error) {
      console.log(error);
    }
  };
  const prev = async () => {
    setCounter(counter - 1);
    console.log("ini", counter);

    try {
      const result = await getProducts(param, counter);
      // setAllProduct(result.data.result);
      console.log("angka", counter);
      dispatch(setProduct(result.data.result));
      // dispatch({ type: "UPDATE_PAGE", payload: { currentpage: counter } });
    } catch (error) {
      console.log(error);
    }
  };

  //destructuring stateGlobal
  // const { products, currentPage, isPending  } = useSelector((state) => state);
  const {product} = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  // console.log(`products global:`, product);
  
  // const isPending = dispatch({ type: "LOADING_PAGE" });

  // console.log("page: ", currentPage);

  
  // console.log(`data product global:`, products);
  useEffect(() => {
    // setTimeout(() => {
    //   dispatch({ type: "UPDATE_NAME" });
    // }, 2000);
    dispatch({ type: "LOADING_PAGE" })
    getAllProduct();
  }, [param.filter]);

  useDocumentTitle("Products");
  return (
    <Fragment>
      <NavBar onChange={(e) => setSearchProduct(e.target.value)} />
      <body className={`container-fluid ${styles["main-body"]}`}>
        <section
          className={`container-fluid text-dark ${styles["sec-product"]}`}
        >
          <div className={`row align-items-center ${styles["sub-product"]}`}>
            <section className={`col-4 border w-25 ${styles["box-side"]}`}>
              <h1 className={`text-center ${styles["promoforyou"]}`}>
                Promo for you
              </h1>

              {/* <p>{stateGlobal.name}</p> */}
              {/* krn sudah destructuring jadi name aja */}
              {/* <p>{name}</p> */}

              <br />
              <p className={`text-center ${styles["coupons"]}`}>
                Coupons will be updated every weeks. <br />
                Check them out!
              </p>
              <PromoCard />
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
            </section>

            <section
              className={`col-8 border w-75 row align-items-start ${styles["main-side"]}`}
            >
              <div className={`container ${styles["filter-side"]}`}>
                <aside
                  className={`row row-cols-auto ${styles["sub-category"]}`}
                >
                  <Link to={`/categorys/favorite-products`}>
                    <aside
                      className={`col text-decoration-underline align-middle ${styles["fav-prod"]}`}
                    >
                      <p onClick={handleFavorite}>Favorite Product</p>
                    </aside>
                  </Link>

                  <Link to={`/categorys/coffee`}>
                    <aside
                      onClick={() => {
                        // navigate(`/products/${param.filter}`)
                        handleCoffee();
                      }}
                      className={`col  ${styles["category"]}`}
                    >
                      Coffee
                    </aside>
                  </Link>
                  <Link to={`/categorys/non-coffee`}>
                    <aside
                      onClick={handleNonCofee}
                      className={`col  ${styles["category"]}`}
                    >
                      Non Coffee
                    </aside>
                  </Link>

                  <Link to={`/categorys/food`}>
                    <aside
                      onClick={handleFood}
                      className={`col ${styles["category"]}`}
                    >
                      Foods
                    </aside>
                  </Link>
                  <Link to={`/categorys/addon`}>
                    <aside className={`col ${styles["category"]}`}>
                      Add-on
                    </aside>
                  </Link>
                </aside>
              </div>
              <span className={` ${styles["sortby"]}`}>Sort by:</span>
              <label className={` ${styles["dropdown"]}`}>
                <div className={` ${styles["dd-button"]}`}>Most Popular</div>

                <input
                  type="checkbox"
                  className={` ${styles["dd-input"]}`}
                  id="test"
                />

                <ul className={` ${styles["dd-menu"]}`}>
                  <li onClick={mostExpensive}>Most expensive</li>
                  <li onClick={cheapest}>Cheapest</li>
                  <li onClick={newest}>Newest</li>
                  <li onClick={oldest}>Oldest</li>
                  <li className={` ${styles["divider"]}`}></li>
                </ul>
              </label>

              <aside className={`"container text-center ${styles["sub-list"]}`}>
                <div
                  className={`"container text-center ${styles["list-products"]}`}
                >
                  <aside
                    className={`row align-items-start ${styles["prod-wrap"]}`}
                  >
                    {
                    // isPending ? (
                    //   <div className={`${styles.loading}`}>
                    //     <IsLoading />
                    //   </div>
                    // ) : (
                      product
                        .filter((product) => {
                          if (query === "") {
                            return product;
                          } else if (
                            product.name
                              .toLowerCase()
                              .includes(query.toLowerCase())
                          ) {
                            return product;
                          }
                        })

                        .map((product) => {
                          return (
                            <ProductCard
                              name={product.name}
                              price={"IDR " + product.price}
                              image={product.image}
                              key={product.id}
                            />
                          );
                        })
                    // )
                    }
                  </aside>

                  <nav
                    className={`${styles["page"]}`}
                    aria-label="Page navigation example"
                  >
                    <ul className={`pagination ${styles["pagination"]}`}>
                      <li className={`page-item ${styles["pageitem"]}`}>
                        <a
                          className={`page-link ${styles["pagelink"]}`}
                          onClick={prev}
                          href="#"
                        >
                          Previous
                        </a>
                      </li>

                      <li className={`page-item ${styles["pageitem"]}`}>
                        <a
                          className={`page-link ${styles["pagelink"]}`}
                          onClick={next}
                          href="#"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
            </section>
          </div>
        </section>
        <Footer />
      </body>
    </Fragment>
  );
};

export default withNavigate(Products);
