import { UPDATE_ZOOM } from '../actions/zoom_actions';

const zoomReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_ZOOM:
            return action.value;
        default:
            return state;
    }
}

export default zoomReducer;
