import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import invoicesReducer from './invoicesReducer';
import accountReducer from './accountReducer';

const reducers = combineReducers({
  transactions: transactionsReducer,
  invoices: invoicesReducer,
  account: accountReducer
}); 

export default reducers;