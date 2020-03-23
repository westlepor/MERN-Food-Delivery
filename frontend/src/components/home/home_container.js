import { connect } from 'react-redux';
import Home from './home';
import { fetchUsers } from "../../actions/user_actions"
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions"
import { fetchBusinesses } from "../../actions/business_actions"
import { createGroup } from "../../actions/group_actions"

const mapSTP = (state) => ({
    user: state.session.user,
    users: Object.values(state.entities.users),
    foodRestrictions: state.entities.foodRestrictions,
    selectedFoodRestrictions: state.ui.selectedFoodRestrictions,
    businesses: state.entities.businesses
})

const mapDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    createGroup: group => dispatch(createGroup(group))
})

export default connect(mapSTP, mapDTP)(Home);