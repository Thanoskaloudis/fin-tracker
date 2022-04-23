import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index';
import './Summary.scss';

const Summary = () => {
  const [colorText, setColorText] = useState("");
  const [monthlyInvoices, setMonthlyInvoices] = useState(0);
  const [monthlyTransactions, setMonthlyTransactions] = useState(0);
  const invoices = useSelector((state) => state.invoices);
  const transactions = useSelector((state) => state.transactions.transactions);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { fetchAccount, setBudget  } = bindActionCreators(
    actionCreators,
    dispatch
  );

  /**
   * Set total amount color based on the badget.
   */
  const checkBudget = () => {
    if(account.total_amount > account.budget) {
      setColorText('#77DD77');
    } else if(account.total_amount < account.budget) {
      setColorText('#ffb347');
    } else if(account.total_amount < 0) {
      setColorText('#ff6961');
    }
  };
    
  /**
   * Set the number of invoices and transactions for the last 30 days.
   */
  const checkMonthlyData = () => {
    const now = new Date();
    now.setDate(now.getDate() - 30);
    const month = now.toISOString().split('T')[0];

    let numTransactions = 0;
    let numInvoices = 0;

    invoices.forEach(invoice => {
      let invoiceMonth = new Date(invoice.invoice_date).toISOString().split('T')[0];
      if(invoiceMonth > month) {
        numInvoices++;
      }
    });

    transactions.forEach(transaction => {
      let transactionMonth = new Date(transaction.transaction_date).toISOString().split('T')[0];
      if(transactionMonth > month) {
        numTransactions++;
      }
    });

    setMonthlyInvoices(numInvoices);
    setMonthlyTransactions(numTransactions);
  };

  /**
   * Handles Enter Key event and dispatch an action to update acount's budget.
   * @param {KeyboardEvent} e keyboard event
   */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setBudget(parseFloat(e.target.value));
    };
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  useEffect(() => {
    checkBudget();
    if(invoices.length > 0 && transactions.length > 0) {
      checkMonthlyData();
    }
  }, [account, invoices]);

  return (
    <div className="summary">
      <div className="card">
        <div className="title">Summary</div>
        <div className="amount" style={{color: colorText}}>£{account.total_amount}</div>
        <h3>Last 30 days:</h3>
        <div className="features">
          <ul>
            <li>
              <span>{monthlyInvoices}</span> Invoives
            </li>
            <li>
              <span>{monthlyTransactions}</span> Transactions
            </li>
            <li>
            Budget: <span>£{account.budget}</span>
            </li>
            <li>
            </li>
          </ul>
        </div>
        <div className="budget">
          <h4 htmlFor="">Set Budget</h4>
          <input type="number" onKeyDown={handleKeyDown}/>
        </div>
      </div>
    </div>
  );
};

export default Summary;
