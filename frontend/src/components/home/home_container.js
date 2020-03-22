import { connect } from 'react-redux';
import Home from './home';
import { fetchUsers } from "../../actions/user_actions"
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions"

const mapSTP = (state) => ({
    user: state.session.user,
    users: state.entities.users.values,
    foodRestrictions: state.entities.foodRestrictions,
    selectedFoodRestrictions: state.ui.selectedFoodRestrictions
})

const mapDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapSTP, mapDTP)(Home);