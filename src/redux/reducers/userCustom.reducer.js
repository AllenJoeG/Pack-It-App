const userCustomReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_CUSTOM':
      return action.payload;
    case 'CLEAR_USER_CUSTOM':
      return [];
    default:
      return state;
  }
};

export default userCustomReducer;