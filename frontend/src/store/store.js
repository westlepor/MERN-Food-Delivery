import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import appReducer from '../reducers/app_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(
        appReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;
