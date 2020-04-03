import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import Swipe from './swipe'
import { fetchBusinesses } from "../../actions/business_actions";
import { fetchGroup, updateGroup } from "../../actions/group_actions";
import { fetchUser } from "../../actions/user_actions";
import { clearUpData } from "../../actions/clear_actions";

const mSTP = state => ({
  user: state.session.user,
  users: state.entities.users,
  groups: state.entities.groups
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchGroup: (id) => dispatch(fetchGroup(id)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateGroup: (group) => dispatch(updateGroup(group)),
  clearUpData: () => dispatch(clearUpData())
});

export default connect(mSTP, mDTP)(Swipe);