const headoutTripReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_TRIPS':
      return action.payload;
    case 'CLEAR_USER_TRIPS':
      return [];
    default:
      return state;
  }
};

export default headoutTripReducer;