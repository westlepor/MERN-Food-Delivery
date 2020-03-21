import { combineReducers } from "redux";
import modalReducer from './modal_reducer';
import selectedFoodRestrictionsReducer from './selected_food_restrictions_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    selectedFoodRestrictions: selectedFoodRestrictionsReducer
})

export default uiReducer;