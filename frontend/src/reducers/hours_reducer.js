import { RECEIVE_HOURS } from "../actions/hour_actions";
import _ from 'lodash';

const hourReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_HOURS:
            return action.hours;
        default:
            return oldState;
    }
};

export default hourReducer;
