const {createStore} = require("redux")

const initState = {
    products: [],
    name: 'Luqman',
    currentPage: 1,
    // promo: []
    
}

const reducer = (state= initState, action) => {
    if(action.type === 'UPDATE_DATA_PRODUCT') {
        return {
            ...state,
            products: action.payload
        }
    }
    if (action.type === `UPDATE_NAME`) {
        return {
            ...state,
            name: `Grahito`
        }
    }

    if(action.type === 'UPDATE_PAGE') {
        return {
            ...state,
            currentPage: action.payload
        }
    }

    return state
}

const store = createStore(reducer)
export default store