import * as APIUtil from "../util/food_restrictions_api_util";
export const RECEIVE_FOOD_RESTRICTIONS = 'RECEIVE_FOOD_RESTRICTIONS';

const receiveFoodRestrictions = payload => ({
    type: RECEIVE_FOOD_RESTRICTIONS,
    foodRestrictions: payload.data
});

export const fetchFoodRestrictions = () => dispatch =>
    APIUtil.fetchFoodRestrictions().then(foodRestrictions =>
        dispatch(receiveFoodRestrictions(foodRestrictions))
    );