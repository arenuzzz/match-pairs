import React from "react";
import { Provider } from "react-redux";
import { Map } from "immutable";
import { ConnectedRouter } from "connected-react-router/immutable";
import { createBrowserHistory } from "history";

import "normalize.css";

import App from "./App.jsx";
import configureStore from "../store";

const initialState = Map();

const history = createBrowserHistory();
const store = configureStore(initialState, history);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
