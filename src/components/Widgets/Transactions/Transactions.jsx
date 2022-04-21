import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';

const Transactions = () => {
  const transactions = useSelector(
    (state) => state.transactions.transactions
  );
  const dispatch = useDispatch();
  const { fetchTransactions } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    fetchTransactions();
    console.log(transactions);
  }, []);

  return (
    <div>
      {transactions.map((transaction) => (
        <div
          className="station"
          key={transaction.transaction_id}
        >
          {transaction.type}
        </div>
      ))}
    </div>
  );
};

export default Transactions;
