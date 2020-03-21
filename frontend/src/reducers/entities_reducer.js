import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import businessesReducer from "./businesses_reducer";
import hoursReducer from "./hours_reducer";
import categoriesReducer from "./categories_reducer";
import groupsReducer from "./groups_reducer";
import foodRestrictionsReducer from "./food_restrictions_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessesReducer,
  hours: hoursReducer,
  categories: categoriesReducer,
  groups: groupsReducer,
  foodRestrictions: foodRestrictionsReducer
});

export default entitiesReducer;
