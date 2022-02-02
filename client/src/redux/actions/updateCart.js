const updateCart = (cart) => {
  return ({
    type: 'UPDATE_CART',
    cart: cart
  });
};

export default updateCart;