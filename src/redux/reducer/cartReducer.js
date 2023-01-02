const initStateCart = {
  cartContents: [],
};

const cartReducer = (state = initStateCart, action) => {
  if (action.type === "ADD_CART") {
    // console.log(action.payload);
    // return {
    //   ...state,
    //   cartContents: action.payload,
    // };

    const output = state.cartContents.find(
      (item) => item.id_product === action.payload.id_product
    );
    console.log(action.payload);
    if (output) {
      output.quantity++;
    } else {
      state.cartContents.push({ ...state, cartContents: action.payload });
    }
  }
  return state;
};

export default cartReducer;
