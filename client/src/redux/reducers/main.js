import { combineReducers } from 'redux';
import user from './user.js';
import cart from './cart.js';

var rootReducer = combineReducers({ user, cart });

export default rootReducer;
