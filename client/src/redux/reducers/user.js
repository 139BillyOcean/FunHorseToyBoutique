const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_USER':
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
