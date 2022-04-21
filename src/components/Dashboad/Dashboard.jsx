import React from 'react';
import Transactions from '../Widgets/Transactions/Transactions';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Transactions />
    </div>
  )
}

export default Dashboard