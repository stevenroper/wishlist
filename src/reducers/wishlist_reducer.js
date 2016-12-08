import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case ADD_TO_WISHLIST:
      return { ...state, [action.payload.collectionId]: action.payload };
    case REMOVE_FROM_WISHLIST:
      let newState = Object.assign({}, state);
      delete newState[action.payload.collectionId]
      return newState;
  }

  return state;
}