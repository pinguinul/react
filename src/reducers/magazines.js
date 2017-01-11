/**
 * Created by Andra on 11-Jan-17.
 */
import { handle } from 'redux-pack';
import { GET_MAGAZINES } from '../actions/';

const initialState = {
    areLoading: false,
    error: null,
    magazinesList: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_MAGAZINES:
            return handle(state, action, {
                start: s => (Object.assign({}, s, { areLoading: true, error: null, magazinesList: null })),
                finish: s => (Object.assign({}, s, { areLoading: false })),
                failure: s => (Object.assign({}, s, { error: payload })),
                success: s => (Object.assign({}, s, { magazinesList: payload })),
                always: s => (Object.assign({}, s)),
            });
        default:
            return state;
    }
};
