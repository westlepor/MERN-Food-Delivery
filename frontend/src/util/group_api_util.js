import axios from 'axios';

export const createGroup = (group) => {
    return axios.post('/api/group', group);
};

export const deleteGroup = (group) => {
    return axios.post(`/api/group/${group.id}`, group);
};

export const updateGroup = group => {
    return axios.patch(`/api/group/${group.groupName}`, group);
};

export const fetchGroup = (groupId) => {
    return axios.get(`/api/group/${groupId}`);
};