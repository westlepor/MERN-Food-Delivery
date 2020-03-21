import { RECEIVE_FOOD_RESTRICTIONS } from "../actions/food_restriction_actions";

const foodRestrictionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_FOOD_RESTRICTIONS:
            return action.foodRestrictions;
        default:
            return oldState;
    }
};

export default foodRestrictionsReducer;
