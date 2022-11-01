import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homepage";
import Login from "../pages/login";
import Products from "../pages/product";
import Profile from "../pages/profile";
import SignUp from "../pages/register";
import DetailsProduct from "../pages/detail-products";
import History from "../pages/history";
import Payment from "../pages/payment";
import Forgotpw from '../pages/forgotpw'
import Error from "../pages/404";
import Loginrep from "../pages/login-replica"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,

  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/details",
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
    path: "/loginrep",
    element: <Loginrep />,
  },
]);

export default router;
