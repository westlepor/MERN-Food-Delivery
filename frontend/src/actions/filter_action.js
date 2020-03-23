import { fetchBusinessesByCoordinates } from './business_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filters, value) => ({
    type: UPDATE_FILTER,
    filters,
    value
});

export function updateFilter(filters, value) {
    return (dispatch, getState) => {
        return dispatch(changeFilter(filters, value));
    };
}