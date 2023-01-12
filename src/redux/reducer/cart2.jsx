// src/redux/cartSlice.js
import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart : []
  },
  
  reducers: {
    addToCarts: (state, action) => {
      console.log(current(state))
      // const itemInCart = state.cart.find(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemInCart) {
      //   itemInCart.quantity++;
      // } else {
      //   state.cart.push({ ...action.payload, quantity: 1 });
      // }
      
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id_product === action.id_product ? {...product, selected: true} : product,
        ),
        // ...state,       
        // cart: action.payload
      };
    },
    
    // incrementQuantity: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload);
    //   item.quantity++;
    // },
    // decrementQuantity: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload);
    //   if (item.quantity === 1) {
    //     item.quantity = 1;
    //   } else {
    //     item.quantity--;
    //   }
    // },
    // removeItem: (state, action) => {
    //   const removeItem = state.cart.filter(
    //     (item) => item.id !== action.payload
    //   );
    //   state.cart = removeItem;
    // },
    
  },
  
});

export const cartsReducer = cartSlice.reducer;
export const { addToCarts, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
