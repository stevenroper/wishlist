import { ADD_TO_WISHLIST } from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TO_WISHLIST:
      return [ ...state, action.payload ];
  }

  return state;
}