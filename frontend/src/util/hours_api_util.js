import axios from 'axios';

export const fetchHours = () => {
    return axios.get(`api/hours`)
}