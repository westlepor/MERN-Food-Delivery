import axios from 'axios';

export const fetchBusinesses = () => {
    return axios.get(`/api/businesses`)
};

export const fetchBusiness = (id) => {
    return axios.get(`/api/businesses/${id}`)
};
