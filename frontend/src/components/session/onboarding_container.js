import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout, signup } from "../../actions/session_actions";
import { clearUpData } from "../../actions/clear_actions";
import Onboarding from "./onboarding";

const mapSTP = state => ({
    curState: state,
    selectedFoodRestrictions: state.ui.selectedFoodRestrictions,
    foodRestrictions: state.entities.foodRestrictions,
    errors: state.errors.session
});

const mapDTP = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    clearUpData: () => dispatch(clearUpData())
});

export default connect(mapSTP, mapDTP)(Onboarding);
