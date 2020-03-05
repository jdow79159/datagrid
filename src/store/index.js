import { createStore, combineReducers } from 'redux';
import tableReducer from './reducers/table';

export const rootReducer = combineReducers({
  table: tableReducer,
});
export default createStore(rootReducer);
