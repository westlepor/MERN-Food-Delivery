import axios from 'axios';

export const fetchBusinesses = () => {
    return axios.get(`/api/businesses`)
};

export const fetchBusinessesByCoordinates = (bounds) => {
    return axios.get(`/api/businesses/coordinates`, {
        params: {
            bounds: bounds
        }
    })
};

export const fetchBusiness = (id) => {
    return axios.get(`/api/businesses/${id}`)
};
