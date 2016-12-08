import { ADD_TO_WISHLIST } from './types';

export function addToWishlist(album) {
  return {
    type: ADD_TO_WISHLIST,
    payload: album
  }
}