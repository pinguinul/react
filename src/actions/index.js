/**
 * Created by Andra on 14-Dec-16.
 */

export const SELECT_TAB = 'SELECT_TAB';
export const GET_MAGAZINES = 'GET_MAGAZINES';

export const selectTab = (id) => {
    return {
        type: SELECT_TAB,
        payload: id,
    };
};

export const getMagazinesList = () => {
    return {
        type: GET_MAGAZINES,
        promise: fetch(
            'http://files.flipsnack.net/collections/resources/stock.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(res => res.json()),
    };
};
