// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppContainer } from "react-hot-loader";
import reducers from "./reducers";
import App from "./app";
import "./index.css";

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = document.getElementById("app");
if (app == null) {
  throw new Error("no app element");
}

ReactDOM.render(
  <AppContainer>
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </AppContainer>,
  app
);
