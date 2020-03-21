export const SELECT_FOOD_RESTRICTIONS = 'SELECT_FOOD_RESTRICTIONS';

export const receiveSelectedFoodRestrictions = (selectedFoodRestrictions) => {
    return {
        type: SELECT_FOOD_RESTRICTIONS,
        selectedFoodRestrictions: selectedFoodRestrictions
    }
}

// export const closeModal = () => ({
//     type: CLOSE_MODAL
// })