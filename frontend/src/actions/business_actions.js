import * as APIUtil from "../util/business_api_util";
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';

const receiveBusiness = payload => ({
    type: RECEIVE_BUSINESS,
    business: payload.data
});

const receiveBusinesses = payload => ({
    type: RECEIVE_BUSINESSES,
    businesses: payload.data
});

export const fetchBusiness = (businessId) => dispatch => (
    APIUtil.fetchBusiness(businessId)
        .then((business) => dispatch(receiveBusiness(business)))
);

export const fetchBusinessesByCoordinates = (bounds) => dispatch => (
    APIUtil.fetchBusinessesByCoordinates(bounds)
        .then((businesses) => dispatch(receiveBusinesses(businesses)))
)

export const fetchBusinesses = () => dispatch => (
    APIUtil.fetchBusinesses()
        .then((businesses) => dispatch(receiveBusinesses(businesses)))
);
