import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import Swipe from './swipe'
import { fetchBusinesses } from "../../actions/business_actions";

const mSTP = state => ({
    // currentUser: state.entities.users[state.session.currentUserId]
    businesses: state.entities.businesses,
    // group: state.entities.group
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(mSTP, mDTP)(Swipe);