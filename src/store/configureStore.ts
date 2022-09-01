import { combineReducers, configureStore } from "@reduxjs/toolkit";

function contador(state = 0, action: any) {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    default:
      return state;
  }
}

const reducer = combineReducers({ contador });
const store = configureStore({ reducer });

export default store;
