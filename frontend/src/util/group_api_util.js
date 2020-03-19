import axios from 'axios';

export const createGroup = (group) => {
    return axios.post('/api/groups', group)
};

export const deleteGroup = (groupId) => {
    return axios.delete(`/api/groups/${groupId}`);
};

export const updateGroup = group => {
    return axios.patch(`/api/groups/${group.id}`, group);
};

export const fetchGroup = (groupId) => {
    return axios.get(`/api/groups/${groupId}`);
};

export const fetchGroups = () => {
    return axios.get(`/api/groups/`);
};