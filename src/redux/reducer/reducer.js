import { combineReducers } from "redux"
import globalReducer from "./globalReducer"
import homeReducer from "./homeReducer"
import cartReducer from "./cartReducer"
import payReducer from "./paymentReducer"
import idReducer from "./idReducer"
import profileReducer from "./profileReducer"
import { cartsReducer } from "./cart2"

const reducer = combineReducers({
    homeReducer,
    globalReducer,
    cartReducer,
    payReducer,
    idReducer,
    profileReducer,
    cartsReducer
})

export default reducer