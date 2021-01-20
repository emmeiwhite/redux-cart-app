import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff
import { createStore } from "redux";
import reducer from "./reducer";
import { INCREASE, DECREASE } from "./actions";

// Provider from "react-redux"

import { Provider } from "react-redux";

// Getting Initial Total
const initialTotal = cartItems.reduce((acc, item) => {
  return (acc = acc + item.price);
}, 0);

const initialState = {
  cart: cartItems,
  total: initialTotal,
  totalItems: 3,
};

const store = createStore(reducer, initialState);

function App() {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
