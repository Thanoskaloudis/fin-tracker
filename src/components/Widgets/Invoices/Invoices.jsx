import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';
import { DataGrid } from '@mui/x-data-grid';
import './Invoices.scss';

const Invoices = () => {
  const invoices = useSelector(
    (state) => state.invoices.invoices
  );
  const transactions = useSelector(
    (state) => state.transactions.transactions
  );
  const dispatch = useDispatch();
  const { fetchInvoices } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    fetchInvoices();
    console.log(invoices);
  }, []);

  const columns = [
    {
      field: 'invoice_date',
      headerName: 'Date',
      width: 200,
      type: 'date',
      editable: true,
    },
    {
      field: 'id',
      headerName: 'Reference Number',
      width: 160,
      editable: true,
    },
    {
      field: 'client',
      headerName: 'Client',
      width: 120,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      editable: true,
      width: 100,
    },
    {
      field: 'status',
      headerName: 'Status',
      align: 'center',
      editable: false,
      width: 100,
    },
  ];

  const checkStatus = (invoice) => {
    const potentialTransaction = transactions.find((transaction) => {
      if(invoice.amount === transaction.amount) {
        return transaction
      } 
    });

    if (potentialTransaction && invoice.id === potentialTransaction.id &&
         new Date(invoice.invoice_date).getTime() > new Date(potentialTransaction.transaction_date).getTime()) {
      return 'PAID';
    } else {
      return 'NOT PAID';
    }
  };

  const rows = invoices.map((invoice) => {
    const converted = {};

    converted.invoice_date = invoice.invoice_date;
    converted.id = invoice.id;
    converted.client = invoice.client;
    converted.amount =
      invoice.type === 'refund'
        ? `- £${invoice.amount}`
        : `+ £${invoice.amount}`;
    converted.status = checkStatus(invoice);
    return converted;
  });

  return (
    <div>
      <h3>Invoices</h3>
      <div style={{ height: 230, width: '90%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={3}
          rowHeight={40}
          loading={!invoices.length}
          style={{
            background: 'white',
            boxShadow: '0px 13px 20px 0px #80808029',
          }}
        />
      </div>
    </div>
  );
};

export default Invoices;
