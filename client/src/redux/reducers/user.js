const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_USER':
    if (action.user) {
      return state = action.user;
    } else {
      return state;
    }
  default:
    return state;
  }
};

export default currentUserReducer;
