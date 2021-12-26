const gearReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GEAR':
      return action.payload;
    case 'CLEAR_GEAR':
      return [];
    default:
      return state;
  }
};

export default gearReducer;