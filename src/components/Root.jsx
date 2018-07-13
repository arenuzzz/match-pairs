import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import configureStore from "../store";
import routes from "../routes";

const initialState = {};

const history = createBrowserHistory();
const store = configureStore(initialState, history);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>
);
