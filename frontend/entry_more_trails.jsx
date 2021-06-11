import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";


import {fetchTrail, fetchTrails} from './actions/trail_actions'
import { fetchParks } from './actions/park_actions'
import { login } from "./util/session_api_util";


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  // window.fetchTrail = fetchTrail
  // window.fetchTrails = fetchTrails
  // window.fetchParks = fetchParks 
  // window.dispatch = store.dispatch
  // window.store = store 
  // window.login = login 
});
