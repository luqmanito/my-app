import { actionStrings } from "./actionStrings";
import { ACTION_STRING } from "./actionStrings";
const {
  addtoCart,
  updateItemQty,
  resetCart,
  deleteCartItem,
  createTrans,
  resetHistory,
} = ACTION_STRING;

const updateCartItem = (productId, qty) => {
  return {
    type: updateItemQty,
    payload: { productId, qty },
  };
};

const deleteItem = (productId) => {
  return { type: deleteCartItem, payload: { productId } };
};

const cartReset = () => {
  return { type: resetCart };
};

const historyReset = () => {
  return { type: resetHistory };
};

const addtoCartActions = (body) => {
  return {
    type: addtoCart,
    payload: { body },
  };
};

const createTransActions = (body) => {
  return {
    type: createTrans,
    payload: { body },
  };
};

const paymentAction = {
  historyReset,
  addtoCartActions,
  updateCartItem,
  deleteItem,
  cartReset,
  createTransActions,
};

export default paymentAction;
