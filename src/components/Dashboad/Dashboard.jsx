import React from 'react';
import Invoices from '../Widgets/Invoices/Invoices';
import Transactions from '../Widgets/Transactions/Transactions';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Transactions />
      <Invoices />
    </div>
  )
}

export default Dashboard