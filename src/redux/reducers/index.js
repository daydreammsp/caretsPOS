import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import squareReducer from './squareReducer';
import squareGetReducer from './squareGetReducer';
import squareGetProducts from './getProductsReducer';

const store = combineReducers({
  user,
  login,
  squareReducer,
  squareGetReducer,
  squareGetProducts
});

export default store;
