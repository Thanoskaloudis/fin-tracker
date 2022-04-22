export const fetchTransactionsSuccess = (transactions) => {
  return {
    type: 'fetchTransactionsSuccess',
    payload: transactions,
  };
};

export const fetchTransactionsFailure = (error) => {
  return {
    type: 'fetchTransactionsFailure',
    payload: error,
  };
};

export const fetchInvoicesSuccess = (transactions) => {
  return {
    type: 'fetchInvoicesSuccess',
    payload: transactions,
  };
};

export const fetchInvoicesFailure = (error) => {
  return {
    type: 'fetchTransactionsFailure',
    payload: error,
  };
};

export const fetchTransactions = () => {
  return (dispatch) => {
    fetch('transactions.json', {})
      .then(response =>{
        return response.json();
      })
      .then(transactions => {
        dispatch(fetchTransactionsSuccess(transactions))
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchTransactionsFailure(errorMsg))
      });
  };
};

export const fetchInvoices = () => {
  return (dispatch) => {
    fetch('invoices.json', {})
      .then(response =>{
        return response.json();
      })
      .then(invoices => {
        dispatch(fetchInvoicesSuccess(invoices))
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchInvoicesFailure(errorMsg))
      });
  };
};

