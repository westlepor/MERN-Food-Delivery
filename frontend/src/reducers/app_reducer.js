import rootReducer from './root_reducer';
const appReducer = (state, action) => {
    if (state.entities === undefined) {
        return rootReducer(state, action)
    }
    const curSession = state.session;
    const uiModal = state.ui.modal;
    const uiInfo = state.ui.info;

    if (action.type === 'CLEAR_UP_DATA') {
        state.entities = {};
        state.session = curSession;
        state.errors = {};
        state.ui = {
            modal: uiModal,
            selectedFoodRestrictions: [],
            filters: {},
            zoom: {},
            info: uiInfo
        }
    }
    return rootReducer(state, action)
}
export default appReducer;