export const fetchTransactionsSuccess = (transactions) => {
  return {
    type: 'fetchTransactionSuccess',
    payload: transactions,
  };
};

export const fetchTransactionsFailure = (error) => {
  return {
    type: 'fetchTransactionFailure',
    payload: error,
  };
};

export const fetchTransactions = () => {
  return (dispatch) => {
    fetch('data.json', {})
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
