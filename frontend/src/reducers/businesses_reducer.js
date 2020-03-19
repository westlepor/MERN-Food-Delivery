import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../actions/business_actions";
import _ from 'lodash';

const businessReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = _.merge({}, oldState);
    switch (action.type) {
        case RECEIVE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;
        case RECEIVE_BUSINESSES:
            return action.businesses;
        default:
            return oldState;
    }
};

export default businessReducer;