import { RECEIVE_CATEGORIES } from "../actions/category_actions";
import _ from "lodash";

const categoriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    default:
      return oldState;
  }
};

export default categoriesReducer;
