import { UPDATE_FILTER } from '../actions/filter_action';

const filtersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER:
            return action.value;
        default:
            return state;
    }
}

export default filtersReducer;
