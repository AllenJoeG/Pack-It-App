const headoutTripReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_TRIPS':
      return action.payload;
    case 'CLEAR_USER_TRIPS':
      return [];
    default:
      return state;
  }
};

export default headoutTripReducer;