const initialState = {
  invoices: [],
  error: '',
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchInvoicesSuccess':
      console.log(action.payload);
      return {
        invoices: action.payload,
        error: '',
      };
    case 'fetchInvoicesFailure':
      return {
        invoices: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
