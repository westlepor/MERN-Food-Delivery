import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import FoodRestrictionForm from './food_restriction_form';
import { receiveSelectedFoodRestrictions } from '../../actions/selected_food_restriction_actions';
import { fetchFoodRestrictions } from '../../actions/food_restriction_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        ownProps:ownProps,
        selectedFoodRestrictions: state.ui.selectedFoodRestrictions,
        foodRestrictions: state.entities.foodRestrictions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        receiveSelectedFoodRestrictions: (selectedFoodRestrictions) => dispatch(receiveSelectedFoodRestrictions(selectedFoodRestrictions)),
        fetchFoodRestrictions: (modal) => dispatch(fetchFoodRestrictions(modal))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodRestrictionForm));