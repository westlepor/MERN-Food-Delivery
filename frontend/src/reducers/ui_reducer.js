import { combineReducers } from "redux";
import modalReducer from './modal_reducer';
import selectedFoodRestrictionsReducer from './selected_food_restrictions_reducer';
import filtersReducer from './filters_reducer';
import zoomReducer from './zoom_reducer';
import infoReducer from './info_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    selectedFoodRestrictions: selectedFoodRestrictionsReducer,
    filters: filtersReducer,
    zoom: zoomReducer,
    info: infoReducer
})

export default uiReducer;