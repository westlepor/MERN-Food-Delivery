import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      return null;
    default:
      return oldState;
  }
};

export default usersReducer;
