import axios from 'axios';

export const fetchCategories = () => {
    return axios.get('/api/categories')
};