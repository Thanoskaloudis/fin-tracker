const initialState = {
  account: {},
  error: '',
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchAccountSuccess':
      return state.account = action.payload[0];
    case 'fetchAccountFailure':
      return state.error = action.payload;
    case 'changeAccountBudget':
      let temp = Object.assign({}, state);
        temp.budget = action.payload
      return temp;
    default:
      return state;
  }
};

export default reducer;
