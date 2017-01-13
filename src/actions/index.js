/**
 * Created by Andra on 14-Dec-16.
 */

export const SELECT_TAB = 'SELECT_TAB';
export const GET_STOCK_IMAGES = 'GET_STOCK_IMAGES';

export const selectTab = (id) => ({
    type: SELECT_TAB,
    payload: id,
});

export const getStockImagesList = () => ({
    type: GET_STOCK_IMAGES,
    promise: fetch(
        'http://files.flipsnack.net/collections/resources/stock.json',
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).then(res => res.json()),
});