import C from '../constants';

export const indexCart = cart => ({ type: C.SET_CART, payload: cart });

export const addToCart = product => ({ type: C.ADD_TO_CART, payload: product });
