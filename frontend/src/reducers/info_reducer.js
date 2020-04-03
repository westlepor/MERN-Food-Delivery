import { OPEN_INFO, CLOSE_INFO } from '../actions/info_actions';

const infoReducer = (state = true, action) => {

    switch (action.type) {
        case OPEN_INFO:
            return action.info;
        case CLOSE_INFO:
            return action.info;
        default:
            return state;
    }

}

export default infoReducer;