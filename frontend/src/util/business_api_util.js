import axios from 'axios';

// export const fetchBusinesses = (query) => {
//     return axios.get(`/api/business${query}`)
// };

export const fetchBusiness = (id) => {
    return axios.get(`/api/foods/${id}`)
};