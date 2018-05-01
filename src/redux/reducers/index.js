import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import squareReducer from './squareReducer';
import squareGetReducer from './squareGetReducer';

const store = combineReducers({
  user,
  login,
  squareReducer,
  squareGetReducer
});

export default store;
