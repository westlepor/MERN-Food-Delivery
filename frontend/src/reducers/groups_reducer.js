import { RECEIVE_GROUP, REMOVE_GROUP} from "../actions/group_actions";

const groupsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_GROUP:
            return action.group;
        case REMOVE_GROUP:
            return null;
        default:
            return oldState;
    }
};

export default groupsReducer;