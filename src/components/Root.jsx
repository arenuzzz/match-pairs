import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import { createBrowserHistory } from "history";

import "normalize.css";

import App from "components/App";

import configureStore from "store";

const history = createBrowserHistory();
const store = configureStore(history);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
