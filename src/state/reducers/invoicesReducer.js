const initialState = {
  invoices: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchInvoicesSuccess':
      return state.invoices = action.payload;
    case 'fetchInvoicesFailure':
      return state.error = action.payload;
    case 'updateInvoiceField':
      console.log(state, action.payload);
      return state.map(invoice => {
        let temp = Object.assign({}, invoice);
        if(temp.id === action.payload) {
          temp[action.field] = action.value
        }
        return temp;
      })
    default:
      return state;
  }
};

export default reducer;
