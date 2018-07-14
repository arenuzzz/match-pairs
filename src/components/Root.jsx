import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import App from "./App.jsx";

import configureStore from "../store";

const initialState = {};

const history = createBrowserHistory();
const store = configureStore(initialState, history);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
