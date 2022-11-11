const initStateHome = {
    product: [],

}

const homeReducer = (state= initStateHome, action) => {
    if(action.type === 'UPDATE_DATA_PRODUCT') {
        return {
            ...state,
            product: action.payload
        }
    }
    return state
}

export default homeReducer