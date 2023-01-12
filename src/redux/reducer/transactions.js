import { ACTION_STRING } from "../action/actionStrings";

const initialState = {
  cart: [],
  transSuccess: []
};

const transactionReducer = (prevState = initialState, { type, payload }) => {
  const {
    addtoCart,
    updateItemQty,
    resetCart,
    deleteCartItem,
    createTrans,
    resetHistory
  } = ACTION_STRING;

  switch (type) {
    case addtoCart:
      return {
        ...prevState,
        cart: 
        // payload.body
        // [...prevState.cart, payload.body]
          // keranjang: [...state.keranjang, action.payload]
          prevState.cart !== null
            ? [payload.body, ...prevState.cart]
            : [payload.body],
      };

      

    case updateItemQty:
      return {
        ...prevState,
        cart: prevState.cart.map((item) => {
          // console.log(item[0].id_product);
          console.log(item);
          if (item.id_product === payload.productId) {
            return {
              ...item,
              quantityCopy: payload.qty,
              // subtotal: parseInt(payload.qty) * item.price,
              subtotal : item.total_order / item.quantity * parseInt(payload.qty)
              
            };
          }
          return item;
        }),
      };

    case deleteCartItem:
      return {
        ...prevState,
        cart: prevState.cart.filter(
          (item) => item.id_product !== payload.productId
        ),
      };

      case resetCart:
      return {
        ...prevState,
        cart: [],
      };

      case createTrans:
      return {
        ...prevState,
        transSuccess: payload.body
      };

      case resetHistory:
      return {
        ...prevState,
        transSuccess: [],
      };


    default:
      return prevState;
  }
};

export default transactionReducer;
