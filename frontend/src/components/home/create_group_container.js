import { connect } from "react-redux";
import CreateGroup from "./create_group";

const mSTP = state => ({
    errors: state.errors.group
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(CreateGroup);