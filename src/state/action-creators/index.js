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

export const fetchAccountSuccess = (account) => {
  return {
    type: 'fetchAccountSuccess',
    payload: account,
  };
};

export const fetchAccountFailure = (error) => {
  return {
    type: 'fetchAccountFailure',
    payload: error,
  };
};

export const updateInvoiceField = (id, field, value) => {
  return {
    type: 'updateInvoiceField',
    payload: id,
    field,
    value,
  };
};

export const changeAccountBudget = (value) => {
  return {
    type: 'changeAccountBudget',
    payload: value,
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

export const fetchAccount = () => {
  return (dispatch) => {
    fetch('account.json', {})
      .then(response =>{
        return response.json();
      })
      .then(account => {
        dispatch(fetchAccountSuccess(account))
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchAccountFailure(errorMsg))
      });
  };
};


export const updateInvoice = (id, field, value) => {
  return (dispatch) => {
    dispatch(updateInvoiceField(id, field, value))
  };
};

export const setBudget = (value) => {
  return (dispatch) => {
    dispatch(changeAccountBudget(value))
  };
};