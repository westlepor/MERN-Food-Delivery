import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout, signup } from "../../actions/session_actions";
import Onboarding from "./onboarding";

const mapSTP = state => ({
    // currentUser: state.entities.users[state.session.currentUserId],
    curState: state,
    selectedFoodRestrictions: state.ui.selectedFoodRestrictions,
    foodRestrictions: state.entities.foodRestrictions
});

const mapDTP = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapSTP, mapDTP)(Onboarding);
