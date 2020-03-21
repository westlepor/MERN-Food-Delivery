import { SELECT_FOOD_RESTRICTIONS } from '../actions/selected_food_restriction_actions';

const selectedFoodRestrictionsReducer = (state = [], action) => {
    switch (action.type) {
        case SELECT_FOOD_RESTRICTIONS:
            return action.selectedFoodRestrictions;
        default:
            return state;
    }
}

export default selectedFoodRestrictionsReducer;
