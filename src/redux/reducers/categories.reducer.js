const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.payload;
    case 'CLEAR_CATEGORIES':
      return [];
    default:
      return state;
  }
};

export default categoriesReducer;