/**
 * Created by Andra on 14-Dec-16.
 */

import { combineReducers } from 'redux';
import tabs from './tabs';
import magazines from './magazines';

export default combineReducers({
    tabs,
    magazines,
});
