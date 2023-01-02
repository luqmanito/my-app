const initStatePrice = {
    grandTotal: [],
  };
  
  const payReducer = (state = initStatePrice, action) => {
    if (action.type === "ADD_TOTAL") {
      return {
        ...state,
        grandTotal: action.payload,
      };
    }
    return state;
  };
  
  export default payReducer;
  