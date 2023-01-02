import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import Home from "../pages/homepage";
import Login from "../pages/login";
import Login2 from "../pages/login-copy";
import Products from "../pages/product";
import Profile from "../pages/profile";
import SignUp from "../pages/register";
import DetailsProduct from "../pages/detail-products";
import History from "../pages/history";
import Payment from "../pages/payment";
import Forgotpw from "../pages/forgotpw";
import Error from "../pages/404";
import Reg from "../pages/reg";
import ProductCard from "../components/cards/product";
import ProductsAdmin from "../page-admin/product-admin";
import DetailsProductsAdmin from "../page-admin/detail-product-admin";
import NewProduct from "../page-admin/new-product";
import NewPromo from "../page-admin/new-promo";
import EditPromo from "../page-admin/edit-promo";
import EditProduct from "../page-admin/edit-product";
import ManageOrder from "../page-admin/manage-admin";
import HomepageAdmin from "../page-admin/homepage-admin";
import PrivateRoute from "./private-route";
import PrivateRoute2 from "./private-route2";
import Forbidden from "../pages/forbidden";
import Modal from "../components/modal/modal";
import PrivateRoute3 from "./private-route3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login2",
    element: <Login />,
  },
  {
    path: "/login",
    element: (
      <PrivateRoute3>
        {" "}
        <Login2 />
      </PrivateRoute3>
    ),
  },

  {
    path: "/register",
    element: (
      <PrivateRoute3>
        {" "}
        <SignUp />
      </PrivateRoute3>
    ),
  },
  {
    path: "/products/all",
    element: <Products />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute2>
        <Profile />
        //{" "}
      </PrivateRoute2>
    ),
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/detail-product/:id",
    element: <DetailsProduct />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/forgot",
    element: <Forgotpw />,
  },
  {
    path: "/reg",
    element: <Reg />,
  },
  {
    path: "/products-admin",
    element: (
      <PrivateRoute>
        <ProductsAdmin />
      </PrivateRoute>
    ),
  },
  {
    path: "/detail-product-admin/:id",
    element: (
      <PrivateRoute>
        <DetailsProductsAdmin />
      </PrivateRoute>
    ),
  },
  {
    path: "/new-product",
    element: (
      <PrivateRoute>
        <NewProduct />
      </PrivateRoute>
    ),
  },
  {
    path: "/edit-product/:id",
    element: (
      <PrivateRoute>
        <EditProduct />
      </PrivateRoute>
    ),
  },
  {
    path: "/new-promo",
    element: (
      <PrivateRoute>
        <NewPromo />
      </PrivateRoute>
    ),
  },
  {
    path: "/edit-promo",
    element: (
      <PrivateRoute>
        {" "}
        <EditPromo />
      </PrivateRoute>
    ),
  },
  {
    path: "/manage-order",
    element: (
      <PrivateRoute>
        <ManageOrder />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <HomepageAdmin />
      </PrivateRoute>
    ),
  },
  {
    path: "/forbidden",
    element: <Forbidden />,
  },
  {
    path: "/modal",
    element: <Modal />,
  },
]);

export default router;
