const currentCartReducer = (state = [], action) => {
  switch (action.type) {
  case 'UPDATE_CART':
    if (action.cart) {
      return state = action.cart;
    } else {
      return state;
    }
  default:
    return state;
  }
};

export default currentCartReducer;