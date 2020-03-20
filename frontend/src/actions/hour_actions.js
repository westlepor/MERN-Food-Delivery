import * as APIUtil from "../util/hours_api_util";
export const RECEIVE_HOURS = 'RECEIVE_HOURS';

const receiveHours = payload => ({
    type: RECEIVE_HOURS,
    hours: payload.data
});

export const fetchHours = () => dispatch => (
    APIUtil.fetchHours()
        .then((hours) => dispatch(receiveHours(hours)))
);
