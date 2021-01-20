import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

const initialState = {
  count: 0,
};

// Settings Action as variables :

const DECREASE = "DECREASE";
const INCREASE = "INCREASE";
const RESET = "RESET";

const reducer = (state, action) => {
  console.log("reducer fxn resoponsible for state updates");
  console.log({ state, action });

  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === RESET) {
    return initialState;
  }
  return state;
};

const store = createStore(reducer, initialState);

console.log(store.getState());

store.dispatch({ type: DECREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: RESET });

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
