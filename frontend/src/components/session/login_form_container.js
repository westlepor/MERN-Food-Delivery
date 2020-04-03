import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import { clearUpData } from "../../actions/clear_actions";
import { withRouter } from 'react-router';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        clearUpData: () => dispatch(clearUpData())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm));