import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import Swipe from './swipe'
import { fetchBusinesses } from "../../actions/business_actions";
import { fetchGroup, updateGroup } from "../../actions/group_actions";
import { fetchUser } from "../../actions/user_actions";

const mSTP = state => ({
  user: state.session.user,
  users: state.entities.users,
  groups: state.entities.groups
  // currentUser: state.entities.users[state.session.currentUserId]
// businesses: Object.values(state.entities.groups[Object.keys(state.entities.groups)] .businesses),
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchGroup: (id) => dispatch(fetchGroup(id)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateGroup: (group) => dispatch(updateGroup(group))
});

export default connect(mSTP, mDTP)(Swipe);