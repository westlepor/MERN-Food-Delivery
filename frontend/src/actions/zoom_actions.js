// import { fetchBusinessesByCoordinates } from './business_actions';

export const UPDATE_ZOOM = 'UPDATE_ZOOM';

export const changeZoom = (value) => ({
    type: UPDATE_ZOOM,
    value
});

export function updateZoom(value) {
    return (dispatch, getState) => {
        dispatch(changeZoom(value));
    };
}