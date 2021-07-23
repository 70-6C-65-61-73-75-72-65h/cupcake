import React, { createContext, ReactElement, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import { reducers } from "./reducers";

const store = createStore(reducers);
// window.__store__ = store;

// export const AppContext = createContext(null);

interface Props {}

export default function App({}: Props): ReactElement {
  // const [order, orderDispatch] = useReducer(Reducers.Order, null);

  return (
    // <AppContext.Provider value={{ order, orderDispatch }}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Modal />
    </Provider>
    // </AppContext.Provider>
  );
}
