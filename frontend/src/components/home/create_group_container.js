import { connect } from "react-redux";
import CreateGroup from "./create_group";
import { updateFilter } from "../../actions/filter_action";
import { fetchBusinessesByCoordinates } from '../../actions/business_actions';

const mSTP = state => ({
    errors: state.errors.group
})

const mDTP = dispatch => ({
    updateFilter: (filters, value) => dispatch(updateFilter(filters, value)),
    fetchBusinessesByCoordinates: (value) => dispatch(fetchBusinessesByCoordinates(value))
})

export default connect(mSTP, mDTP)(CreateGroup);