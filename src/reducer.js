import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], total: 0, totalItems: 0 };
  }

  if (action.type === DECREASE) {
    console.log("you decreased amount");
  }

  if (action.type === INCREASE) {
    console.log("you increased amount");
  }

  if (action.type === REMOVE) {
    console.log("Payload passed is:");
    console.log(action.payload);

    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
      totalItems: state.totalItems - 1,
      total: state.total - action.payload.price,
    };
  }
  return state;
};

export default reducer;
