import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import { clearUpData } from "../../actions/clear_actions";
import Main from "./main";

const mapSTP = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    curState: state
});

const mapDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    clearUpData: () => dispatch(clearUpData())
});

export default connect(mapSTP, mapDTP)(Main);
