import React from "react";
// components
import Navbar from "./components/Navbar";

import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

//reducer-function that used to updte store two arguments-state, action
//state-old state/state before update
//action - what happened / what update
//return updated or old state

import { createStore } from 'redux';

import reducer from './reducer'
//react-redux -Provider -wraps app, connect -used in components
import { Provider } from "react-redux";
//initial store
const initialStore = {
  cart: cartItems,
  total:105,
  amount:3
};

const store = createStore(reducer, initialStore);


console.log(store.getState())

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer  />
    </Provider>
  );
}

export default App;
