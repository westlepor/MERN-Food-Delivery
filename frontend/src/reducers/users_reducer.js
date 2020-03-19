import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";
import _ from 'lodash';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = _.merge({}, oldState);

  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      newState[action.user._id] = action.user;
      return newState;
    default:
      return newState;
  }
};

export default usersReducer;
