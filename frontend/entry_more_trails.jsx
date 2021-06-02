import React from "react";
import ReactDOM from "react-dom";


import configureStore from './store/store'
import { signup, login, logout } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore()
  window.store = store
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login
  window.signup = signup
  window.logout = logout

  ReactDOM.render(<h1>entry file here</h1>, root);
});

// let mo = {
//   fname: 'mo',
//   lname: 'jo',
//   email: 'email',
//   password: 123456
// }