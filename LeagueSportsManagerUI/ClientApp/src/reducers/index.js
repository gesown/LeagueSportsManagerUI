import { combineReducers } from 'redux';
import SportsList from './reducer_sports';

const rootReducer = combineReducers({
    sports: SportsList
});

export default rootReducer;