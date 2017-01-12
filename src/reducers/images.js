/**
 * Created by Andra on 11-Jan-17.
 */
import { handle } from 'redux-pack';
import { GET_STOCK_IMAGES } from '../actions/';

const initialState = {
    areLoading: false,
    error: null,
    list: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_STOCK_IMAGES:
            return handle(state, action, {
                start: s => (Object.assign({}, s, { areLoading: true, error: null, list: null })),
                finish: s => (Object.assign({}, s, { areLoading: false })),
                failure: s => (Object.assign({}, s, { error: payload })),
                success: s => (Object.assign({}, s, { list: payload })),
                always: s => (Object.assign({}, s)),
            });
        default:
            return state;
    }
};
