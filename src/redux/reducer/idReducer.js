const initStateIdProduct = {
    idProductStore: [],
};

const idReducer = (state = initStateIdProduct, action) => {
  if (action.type === "ADD_ID") {
    return {
      ...state,
      idProductStore: action.payload,
    };
  }
  return state;
};

export default idReducer;
