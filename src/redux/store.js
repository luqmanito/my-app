import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/reducer";
import thunk from 'redux-thunk'
import { getProduct } from "../helpers/tools";

const store = createStore(reducer, applyMiddleware(thunk));

const getAllProductAction = (param) => {
    return {
        type : "UPDATE_DATA_PRODUCT",
        payload :getProduct(param)
    }
}




export default store;
