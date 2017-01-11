/**
 * Created by Andra on 14-Dec-16.
 */
import { SELECT_TAB } from '../actions/';

const initialState = {
    selectedTab: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TAB:
            if (action.payload !== state.selectedTab) {
                return Object.assign({}, state, {
                    selectedTab: action.payload,
                });
            }
            break;
        default:
            return state;
    }
};
