import * as APIUtil from "../util/categories_api_util";
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const receiveCategories = payload => ({
    type: RECEIVE_CATEGORIES,
    categories: payload.data
});

export const fetchCategories = () => dispatch =>
    APIUtil.fetchCategories().then(categories =>
    dispatch(receiveCategories(categories))
);