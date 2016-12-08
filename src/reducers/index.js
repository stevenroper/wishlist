import { combineReducers } from 'redux';
import wishlistReducer from './wishlist_reducer';

const rootReducer = combineReducers({
  wishlist: wishlistReducer
});

export default rootReducer;