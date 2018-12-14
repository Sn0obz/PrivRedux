import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
import { Login, Logout } from "./redux/actions";
import App from "./App";
import { User } from "./class/user";
import * as serviceWorker from "./serviceWorker";

window.store = store;
window.Login = Login;
window.Logout = Logout;
window.user = User;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
