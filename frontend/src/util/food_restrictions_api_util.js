import axios from 'axios';

export const fetchFoodRestrictions = () => {
    return axios.get('/api/foodRestrictions')
};