import * as APIUtil from '../util/group_api_util';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';

const receiveGroup = payload => ({
    type: RECEIVE_GROUP,
    group: payload.data
});

const removeGroup = (payload) => ({
    type: REMOVE_GROUP,
    group: payload.data
});

export const createGroup = group => dispatch => (
    APIUtil.createGroup(group)
        .then(group => dispatch(receiveGroup(group)))
);

export const deleteGroup = (group) => dispatch => (
    APIUtil.deleteGroup(group)
        .then(() => dispatch(removeGroup(group)))
);

export const updateGroup = (group) => dispatch => (
    APIUtil.updateGroup(group)
        .then((group) => dispatch(receiveGroup(group)))
);

export const fetchGroup = (groupId) => dispatch => (
    APIUtil.fetchGroup(groupId)
        .then(group => dispatch(receiveGroup(group)))
);
