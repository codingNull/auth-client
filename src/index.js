import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const INIT_STATE = {
  auth: { token: localStorage.getItem("token") },
};

const store = createStore(reducers, INIT_STATE, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
