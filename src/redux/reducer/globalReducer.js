const initState = {
    name: 'Luqman',
    currentPage: 1,
    isPending: false
    
    
}
const globalReducer = (state = initState, action) => {
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
    
    if(action.type === 'LOADING_PAGE') {
        return {
            ...state,
            isPending: true
        }
    }
    
    return state
     
}

export default globalReducer