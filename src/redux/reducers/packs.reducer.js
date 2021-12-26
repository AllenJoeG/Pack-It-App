const packsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PACKS':
      return action.payload;
    case 'CLEAR_PACKS':
      return [];
    default:
      return state;
  }
};

export default packsReducer;