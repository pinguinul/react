/**
 * Created by Andra on 14-Dec-16.
 */

export const selectTab = (id) => {
    return {
        type: 'SELECT_TAB',
        payload: id,
    };
};
