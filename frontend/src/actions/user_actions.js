import * as APIUtil from "../util/user_api_util";
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = payload => ({
    type: RECEIVE_USER,
    user: payload.data
});

const receiveUsers = payload => ({
    type: RECEIVE_USERS,
    users: payload.data
});

export const createUser = user => dispatch => (
    APIUtil.createUser(user)
        .then((user) => dispatch(receiveUser(user)))
);

export const fetchUser = (userId) => dispatch => (
    APIUtil.fetchUser(userId)
        .then((user) => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers()
        .then((users) => dispatch(receiveUsers(users)))
);
