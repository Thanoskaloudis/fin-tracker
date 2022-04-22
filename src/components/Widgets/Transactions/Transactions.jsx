import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';
import { DataGrid } from '@mui/x-data-grid';
import './Transactions.scss';

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
  }, []);

  const columns = [
    {
      field: 'transaction_date',
      headerName: 'Date',
      width: 200,
      type: 'date',
      editable: false,
    },
    {
      field: 'id',
      headerName: 'Reference Number',
      width: 160,
      editable: false,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 180,
      editable: false,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      editable: false,
      width: 100,
    },
  ];

  const rows = transactions.map((transaction) => {
    const converted = {};

    converted.transaction_date = transaction.transaction_date;
    converted.id = transaction.id;
    converted.description = transaction.description;
    converted.amount =
      transaction.type === 'out'
        ? `-£${transaction.amount}`
        : `+£${transaction.amount}`;

    return converted;
  });

  return (
    <div className="transactions">
      <h3>Recent Transactions</h3>
      <div style={{ height: 270, width: '80%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={4}
          rowHeight={40}
          loading={!transactions.length}
          style={{
            background: 'white',
            boxShadow: '0px 13px 20px 0px #80808029',
          }}
        />
      </div>
    </div>
  );
};

export default Transactions;
