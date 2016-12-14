/**
 * Created by Andra on 14-Dec-16.
 */
import { selectTab } from '../actions';
const initialState = 3;

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_TAB':
            return action.payload;
        default:
            return state;
    }
};
