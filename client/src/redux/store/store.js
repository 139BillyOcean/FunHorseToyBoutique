import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

const initialState = {
  cart: [],
  user: {}
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);


export default store;