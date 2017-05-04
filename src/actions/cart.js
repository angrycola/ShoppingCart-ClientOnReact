import axios from 'axios';
import C from '../constants';

const baseURL = 'http://localhost:8080';

export const indexCart = cart => ({ type: C.SET_CART, payload: cart });
export const addToCart = product => ({ type: C.ADD_TO_CART, payload: product });
export const decreaseOne = product => ({ type: C.DECREASE_ONE, payload: product });

export const sendOrder = order => dispatch => {
  console.log('Order', order);
  axios.post(`${ baseURL }/order`, order);
};
