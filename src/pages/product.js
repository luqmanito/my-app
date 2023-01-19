import React, { Fragment, useEffect, useState, useMemo } from "react";
import styles from "../style/product.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import ProductCard from "../components/cards/product";
import PromoCard from "../components/cards/promo";
import NavBar from "../components/header/NavBar";
import withNavigate from "../helpers/withNavigate";
import { getProduct, getProducts } from "../helpers/tools";
import withSearchParams from "../helpers/withSearchParams";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/footer";
import IsLoading from "../components/loading/isLoading";
import { setProduct } from "../redux/action";
import { useNavigate, useLocation } from "react-router-dom";
import { debounce } from "../helpers/debounce";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const Products = (props) => {
  const { product } = useSelector((state) => state.homeReducer);
  const { cartContents } = useSelector((state) => state.transactionReducer);
  const dispatch = useDispatch();
  const getQuery = useQuery();
  const isPending = useSelector((state) => state.globalReducer.isLoading);
  // console.log(isPending);
  const [counter, setCounter] = useState(1);
  const [product2, setProduct2] = useState(1);
  const [thisPage, setThisPage] = useState(1);
  const [searchProduct, setSearchProduct] = useState("");
  const [param, setParam] = useState({
    search: getQuery.get("search") ?? searchProduct,
    sort: getQuery.get("sort") ?? "",
    filter: getQuery.get("filter") ?? "",
    page: getQuery.get("page") ?? 1,
  });

  
  const [pageIndex, setPageIndex] = useState(1);
  const nextData = () => {
    const tempCount = pageIndex + 1;
    setPageIndex(tempCount);
    props.setSearchParams({ ...param, page: tempCount });
  };

  const prevData = () => {
    const tempCount = pageIndex - 1;
    setPageIndex(tempCount);
    props.setSearchParams({ ...param, page: tempCount });
  };
  const getAllProduct = debounce(async () => {
    try {
      const body = {
        search: getQuery.get(`${searchProduct}`) ?? "",
        filter: "",
        sort: "asc",
      };
      const result = await getProducts(body, counter);
      // console.log(result.data.result);
      setProduct2(result.data.result)
      dispatch({ type: "UPDATE_DATA_PRODUCT", payload: result.data.result });
      dispatch({ type: "LOADING_PAGE_FALSE" });
    } catch (error) {
      console.log(error);
    }
  }, 1500);

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
      const body = { ...param, filter: "", sort: "oldest" };
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
      // props.setSearchParams(body);
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
      // props.setSearchParams(body);
      dispatch(setProduct(result.data.result));
    } catch (error) {
      console.log(error);
    }
  };

  const pageSize = 12;
  let page = pageIndex;
  const totalPages = Math.ceil(product2.length === undefined ? 10 : product.length / pageSize);
  // console.log(page);
  const pageData = product.slice(page * pageSize - pageSize, page * pageSize);
  // console.log(pageData);
  const callSearch = () => {
    product.name.toLowerCase().includes(searchProduct.toLowerCase());
  };

  useEffect(() => {
    dispatch({ type: "LOADING_PAGE" });
    getAllProduct();
    // getDataProd()
  }, [searchProduct]);

  const updateChange = (e) => {
    props.setSearchParams({ ...param, search: e.target.value });
    setSearchProduct(e.target.value);
    
  };
  const debounceOnChange = debounce(updateChange, 1000);
  // console.log(searchProduct);
  useDocumentTitle("Products");
  return (
    <Fragment>
      <NavBar onChange={debounceOnChange} />
      {/* <main className={`container-fluid ${styles["main-body"]}`}> */}
        <section
          className={`container-fluid text-dark ${styles["sec-product"]}`}
        >
          <div className={`row align-items-center ${styles["sub-product"]}`}>
            <section className={`col-4 border w-25 ${styles["box-side"]}`}>
              <h1 className={`text-center ${styles["promoforyou"]}`}>
                Promo for you
              </h1>
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
              {}

              <aside className={`"container text-center ${styles["sub-list"]}`}>
                <div
                  className={`"container text-center ${styles["list-products"]}`}
                >
                  <aside
                    className={`row align-items-start ${styles["prod-wrap"]}`}
                  >
                    {isPending ? (
                      <div className={`${styles.loading}`}>
                        <IsLoading />
                      </div>
                    ) : (
                      <div className={` ${styles["main-menu"]}`}>
                        {searchProduct === ""
                          ? pageData
                              .filter((product) => {
                                if (pageData === "") {
                                  return product;
                                } else if (
                                  product.name
                                    .toLowerCase()
                                    .includes(searchProduct.toLowerCase())
                                ) {
                                  return pageData;
                                }
                              })
                              .map((product) => {
                                return (
                                  <ProductCard
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    dataId={product.id}
                                    key={product.id}
                                  />
                                );
                              })
                          : product
                              .filter((detail) => {
                                if (product === "") {
                                  return detail;
                                } else if (
                                  detail.name
                                    .toLowerCase()
                                    .includes(searchProduct.toLowerCase())
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
                                    dataId={product.id}
                                    key={product.id}
                                  />
                                );
                              })}
                      </div>
                    )}
                  </aside>

                  <nav
                    className={`${styles["page"]}`}
                    aria-label="Page navigation example"
                  >
                    <ul className={`pagination ${styles["pagination"]}`}>
                      <li className={`page-item ${styles["pageitem"]}`}>
                        <button
                          className={
                            pageIndex === 1
                              ? `page-link ${styles["pagelink2"]}`
                              : `page-link ${styles["pagelink"]}`
                          }
                          onClick={prevData}
                          disabled={pageIndex === 1 ? true : false}
                          href="#"
                        >
                          Previous
                        </button>
                      </li>

                      <li className={`page-item ${styles["pageitem"]}`}>
                        <button
                          className={
                            pageIndex === totalPages
                              ? `page-link ${styles["pagelink2"]}`
                              : `page-link ${styles["pagelink"]}`
                          }
                          onClick={nextData}
                          disabled={pageIndex === totalPages ? true : false}
                          href="#"
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
            </section>
          </div>
        </section>
        <Footer />
      {/* </main> */}
    </Fragment>
  );
};

export default withSearchParams(Products);
