import { connect } from 'react-redux';
import Home from './home';
import { fetchUsers } from "../../actions/user_actions"
import { logout } from "../../actions/session_actions";

const mapSTP = (state) => ({
    user: state.session.user,
    users: state.entities.users.values
})

const mapDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout())
})

export default connect(mapSTP, mapDTP)(Home);