// import { applyMiddleware, createStore } from "redux";
// import reducer from "./reducer/reducer";
// import thunk from 'redux-thunk'
// import { getProduct } from "../helpers/tools";

// const store = createStore(reducer, applyMiddleware(thunk));

// // const getAllProductAction = (param) => {
// //     return {
// //         type : "UPDATE_DATA_PRODUCT",
// //         payload :getProduct(param)
// //     }
// // }




// export default store;

import { configureStore } from "@reduxjs/toolkit";
// import regSlice from "./reducers/regSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducer/reducer";
import logger from "redux-logger";
import { cartsReducer } from "./reducer/cart2";

const persistConfig = {
  key: "HayaShops",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer:  persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export const persistedStore = persistStore(store);
export default store;

