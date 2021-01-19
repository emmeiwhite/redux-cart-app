import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

const initialState = {
  count: 34,
};
const reducer = (state, action) => {
  console.log("reducer fxn resoponsible for state updates");
  console.log({ state, action });

  if (action.type === "DECREASE") {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

const store = createStore(reducer, initialState);

console.log(store.getState());

store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });

function App() {
  // cart setup
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
