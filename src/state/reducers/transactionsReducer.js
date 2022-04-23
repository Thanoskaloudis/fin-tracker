const initialState = {
  transactions: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchTransactionsSuccess':
      return {
        transactions: action.payload,
        error: '',
      };
    case 'fetchTransactionsFailure':
      return {
        transactions: '',
        error: action.payload,
      };
      default:
      return state;
  }
};

export default reducer;
