const initialState = {
  transactions: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchTransactionSuccess':
      console.log(action.payload);
      return {
        transactions: action.payload,
        error: '',
      };
    case 'fetchTransactionFailure':
      return {
        transactions: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
