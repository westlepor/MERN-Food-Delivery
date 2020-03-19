import React from "react";
import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import Swipe from './swipe'


const mSTP = state => ({
    // currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())

})

export default connect(mSTP, mDTP)(Swipe);