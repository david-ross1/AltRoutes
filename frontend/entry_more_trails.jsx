import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//! TESTING
import { signup, login, logout } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");


  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { currentUserId: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //! TESTING
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  ReactDOM.render(<Root store={store} />, root);
});

// let mo = {
//   first_name: 'mo',
//   last_name: 'jo',
//   email: 'email',
//   password: 123456
// }

