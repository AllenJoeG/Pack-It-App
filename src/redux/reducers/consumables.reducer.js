const consumablesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CONSUMABLES':
      return action.payload;
    case 'CLEAR_CONSUMABLES':
      return [];
    default:
      return state;
  }
};

export default consumablesReducer;