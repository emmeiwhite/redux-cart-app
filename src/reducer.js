import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], total: 0, totalItems: 0 };
  }

  if (action.type === DECREASE) {
    if (action.payload.amount === 1) {
      // Removing item from the cart list
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalItems: state.totalItems - 1,
        total: state.total - action.payload.price,
      };
    }

    const updatedCartItems = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        const updatedCartItem = {
          ...cartItem,
          amount: cartItem.amount - 1,
        };
        return updatedCartItem;
      }
      return cartItem;
    });

    console.log(updatedCartItems);
    return {
      ...state,
      cart: updatedCartItems,
      totalItems: state.totalItems - 1,
      total: state.total - action.payload.price,
    };
  }

  if (action.type === INCREASE) {
    const updatedCartItems = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        const updatedCartItem = {
          ...cartItem,
          amount: cartItem.amount + 1,
        };
        return updatedCartItem;
      }
      return cartItem;
    });

    console.log(updatedCartItems);
    return {
      ...state,
      cart: updatedCartItems,
      totalItems: state.totalItems + 1,
      total: state.total + action.payload.price,
    };
  }

  if (action.type === REMOVE) {
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
