const initState = {
    name: 'Luqman',
    currentPage: 1,
    isLoading: false
    
    
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
            isLoading: true
        }
    }
    if(action.type === 'LOADING_PAGE_FALSE') {
        return {
            ...state,
            isLoading: false
        }
    }
    
    
    return state
     
}

export default globalReducer