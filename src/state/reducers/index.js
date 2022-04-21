import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';

const reducers = combineReducers({
  transactions: transactionsReducer
}); 

export default reducers;