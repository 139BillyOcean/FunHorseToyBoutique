import { connect } from 'react-redux';
// import the component the props that need updating/the event handler will be firing within.
import App from '../../component/App.jsx';
// import the event handler action from Actions
import updateUser from '../actions/updateUser.js';
import updateCart from '../actions/updateCart.js';

//place any props you need from the global state here (or remove if none).
const mapStateToProps = (state) => {
  return {
    user: state.user,
    cart: state.cart
  };
};

//place any events that fire that alter the global state here (or remove if none).
const mapDispatchToProps = (dispatch) =>{
  return {
    handleCurrentUser: (user) => dispatch(updateUser(user)),
    handleCurrentCart: (cart) => dispatch(updateCart(cart))
  };
};

//use whichever connect syntax includes the functions created above.
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
