import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';
import clsx from 'clsx';
import { DataGrid } from '@mui/x-data-grid';
import './Invoices.scss';

const Invoices = () => {
  const [rows, setRows] = useState([]);
  const invoices = useSelector((state) => state.invoices);
  const transactions = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();
  const { fetchInvoices, updateInvoice } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const checkStatus = (invoice) => {
    const potentialTransaction = transactions.find((transaction) => {
      if(parseFloat(invoice.amount) === parseFloat(transaction.amount)) {
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

  const onCellUpdated = (params, event) => {
    let id = params.id
    let field = params.field;
    let value = event.target.value;

    updateInvoice(id, field, value);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  useEffect(() => {
    console.log(invoices);
    if(invoices.length){
      setRows(invoices.map((invoice) => {
        const converted = {};
    
        converted.invoice_date = invoice.invoice_date;
        converted.id = invoice.id;
        converted.client = invoice.client;
        converted.amount =
          invoice.type === 'refund'
            ? `-£${invoice.amount}`
            : `+£${invoice.amount}`;
        converted.status = checkStatus(invoice);
        return converted;
      }));
    }
  }, [invoices]);

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
      width: 100
    },
    {
      field: 'status',
      headerName: 'Status',
      align: 'center',
      editable: false,
      width: 120,
    },
  ];

  return (
    <div className="invoices" style={{width: "51rem"}}>
      <h3>Invoices</h3>
      <div style={{ height: 230, width: '87%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={3}
          rowHeight={40}
          loading={!invoices.length}
          onCellEditStop={onCellUpdated}
          style={{
            background: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.262)',
            borderRadius: '20px'
          }}
        />
      </div>
    </div>
  );
};

export default Invoices;
