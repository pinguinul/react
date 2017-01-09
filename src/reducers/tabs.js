/**
 * Created by Andra on 14-Dec-16.
 */
const initialState = {
    selectedTab: 3,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_TAB':
            if (action.payload !== state.selectedTab) {
                return Object.assign({}, state, {
                    selectedTab: action.payload,
                });
            }
        default:
            return state;
    }
};
