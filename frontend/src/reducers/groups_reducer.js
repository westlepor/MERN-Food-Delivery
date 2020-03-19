import { RECEIVE_GROUP, RECEIVE_GROUPS, REMOVE_GROUP} from "../actions/group_actions";
import _ from 'lodash';

const groupsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = _.merge({}, oldState);

    switch (action.type) {
        case RECEIVE_GROUP:
            newState[action.group._id] = action.group;
            return newState;
        case RECEIVE_GROUPS:
            return action.groups;
        case REMOVE_GROUP:
            return null;
        default:
            return oldState;
    }
};

export default groupsReducer;