const currentStyleReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_STYLE':
    if (action.currentStyle) {
      return state = action.currentStyle;
    } else {
      return state;
    }
  default:
    return state;
  }
};

export default currentStyleReducer;
