import axios from 'axios';

export const fetchcategories = () => {
    return axios.get('/api/categories')
};