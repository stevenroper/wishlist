import { 
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST
} from './types';

export function addToWishlist(album) {
  return {
    type: ADD_TO_WISHLIST,
    payload: album
  }
}

export function removeFromWishlist(album) {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: album
  }
}