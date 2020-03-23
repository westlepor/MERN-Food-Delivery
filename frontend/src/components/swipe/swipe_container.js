import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import Swipe from './swipe';


const mSTP = state => ({
    // currentUser: state.entities.users[state.session.currentUserId],
    businesses: state.entities.businesses

})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    fetchBusinesses: () => dispatch(fetchBusinesses())
    // fetchGroups: () => dispatch(fetchGroups())
})

export default connect(mSTP, mDTP)(Swipe);