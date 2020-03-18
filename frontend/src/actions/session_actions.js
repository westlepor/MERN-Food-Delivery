// import * as SessionAPIUtil from '../util/session_api_util' NEED TO MAKE THIS FILE WITH AXIOS CALLS


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const REMOVE_SESSION = 'REMOVE_SESSION';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
})

const logoutCurrentUser = () => ({
    type: REMOVE_SESSION
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors
})

export const signup = (user) => dispatch => (
    SessionAPIUtil.signup(user)
        .then(user => (dispatch(receiveCurrentUser(user))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
)

export const login = (user) => dispatch => (
    SessionAPIUtil.login(user)
        .then(user => (dispatch(receiveCurrentUser(user))
        ), err => (dispatch(receiveErrors(err.responseJSON))))
)

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
)



export const clearErrors = () => ({
    type: CLEAR_ERRORS
})