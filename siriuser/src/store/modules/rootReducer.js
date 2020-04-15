import { combineReducers } from 'redux';

import modal from './modal/reducer';
import analise from './analise/reducer';

export default combineReducers({
    modal,
    analise,
});