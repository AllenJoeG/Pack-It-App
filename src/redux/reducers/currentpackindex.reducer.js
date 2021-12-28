const currentPackIndex = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CP_INDEX':
      return state;
    case 'INCR_CP_INDEX':
      return state + 1;
    case 'CLEAR_CP_INDEX':
      return 0;
    default:
      return state;
  }
};

export default currentPackIndex;