import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import GroupErrorsReducer from './group_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    group: GroupErrorsReducer
});