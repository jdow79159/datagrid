import { createStore,combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tableReducer from './reducers/table';

export const rootReducer = combineReducers({
  table: tableReducer,
});
export default createStore(rootReducer, composeWithDevTools(
  // other store enhancers if any
));
