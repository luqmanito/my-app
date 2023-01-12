// const initStateCart = {
//   cartContents: [],
// };

// const cartReducer = (state = initStateCart, action) => {
//   if (action.type === "ADD_CART") {
//     return {
//       ...state,
//       cartContents: { cart :action.payload},
//     };
//   }
//   return state;
// };

// export default cartReducer;

const initStateCart = {
  keranjang: [],
}

const cartReducer = (state= initStateCart, action) => {
  if(action.type === 'ADD_CART') {
    // console.log(state.keranjang);
    //  const itemInCart = state.keranjang.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemInCart) {
    //     itemInCart.quantity++;
    //   } else {
    //     state.cart.push({ ...action.payload, quantity: 1 });
    //   }
      return {
          ...state,
          // keranjang: [...state.keranjang, action.payload]
          keranjang: action.payload

      }
  }
  return state
}

export default cartReducer
