/**
 * Created by Andra on 13-Jan-17.
 */
import { SELECT_SUBTAB } from '../actions';

const initialState = {
    selectedSubtab: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_SUBTAB:
            if (action.payload !== state.selectedSubtab) {
                return Object.assign({}, state, {
                    selectedSubtab: action.payload,
                });
            }
            break;
        default:
            return state;
    }
};
