import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout, login, signup } from "./actions/session_actions";
import { fetchUsers, fetchUser } from "./actions/user_actions";
import { fetchHours } from "./actions/hour_actions";
import { fetchBusinesses, fetchBusiness, fetchBusinessesByCoordinates } from "./actions/business_actions";
import { fetchCategories } from "./actions/category_actions";
import { fetchFoodRestrictions } from "./actions/food_restriction_actions";
import { createGroup, fetchGroups, fetchGroup, deleteGroup, updateGroup } from "./actions/group_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/";
    }
  } else {
    store = configureStore({});
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.jwt_decode2 = jwt_decode;
  window.fetchUsers = fetchUsers;
  window.fetchUser = fetchUser;
  window.createGroup = createGroup;
  window.fetchGroups = fetchGroups; 
  window.fetchGroup = fetchGroup; 
  window.deleteGroup = deleteGroup; 
  window.updateGroup = updateGroup
  window.fetchBusinesses = fetchBusinesses
  window.fetchBusiness = fetchBusiness;
  window.fetchHours = fetchHours;
  window.fetchCategories = fetchCategories;
  window.fetchFoodRestrictions = fetchFoodRestrictions;
  window.fetchBusinessesByCoordinates = fetchBusinessesByCoordinates;
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});


