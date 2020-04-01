import { RECEIVE_GROUP_ERRORS
} from '../actions/group_actions';

const GroupErrorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GROUP_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default GroupErrorsReducer;