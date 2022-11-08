// require('dotenv').config()
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Login from './pages/login';
// import Register from './pages/register';
// import Product from './pages/product'
// import Profile from './pages/profile'
// import Homepage from './pages/homepage'
// import Forgotpw from "./pages/forgotpw";
// import History from "./pages/history";
import router from "./route/router";
import { RouterProvider } from "react-router-dom";
// import DetailsProduct from "./pages/detail-products.js";
import reportWebVitals from './reportWebVitals';
import { store } from "./route";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import reportWebVitals from "./reportWebVitals";
// import { RouteController } from "react-router-dom";
// import router from "../src/route/router";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouteController router={router} />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
