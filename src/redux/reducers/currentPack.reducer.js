const currentPackReducer = (state = []
  , action) => {
  switch (action.type) {
    case 'ADD_CURRENTPACK':
      return [...state, action.payload];
    case 'DELETE_CURRENTPACKITEM':
      return state.filter(item => (item.id !== action.payload))
    case 'CLEAR_CURRENTPACK':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default currentPackReducer;
