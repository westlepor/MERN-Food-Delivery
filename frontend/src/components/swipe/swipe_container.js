import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import Swipe from './swipe'
import { fetchBusinesses } from "../../actions/business_actions";
import { fetchGroup } from "../../actions/group_actions";

const mSTP = state => ({
  user: state.session.user,
    // currentUser: state.entities.users[state.session.currentUserId]
  // businesses: Object.values(state.entities.groups[Object.keys(state.entities.groups)] .businesses),
    groups: state.entities.groups
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchGroup: (id) => dispatch(fetchGroup(id))
});

export default connect(mSTP, mDTP)(Swipe);