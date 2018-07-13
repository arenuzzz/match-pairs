import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const devTools = window.devToolsExtension || (() => undefined);

export default function configureStore(inititialState = {}, history) {
  const reducerWithHistory = connectRouter(history)(rootReducer);

  const middlewares = [thunk, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares), devTools()];

  return createStore(reducerWithHistory, inititialState, compose(...enhancers));
}
