import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import invoicesReducer from './invoicesReducer';

const reducers = combineReducers({
  transactions: transactionsReducer,
  invoices: invoicesReducer,
}); 

export default reducers;