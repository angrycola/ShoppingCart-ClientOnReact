import axios from 'axios';
import C from '../constants';

const baseURL = 'https://shopping-cart-server/';

export const indexCart = cart => ({ type: C.SET_CART, payload: cart });
export const addToCart = product => ({ type: C.ADD_TO_CART, payload: product });
export const decreaseOne = product => ({ type: C.DECREASE_ONE, payload: product });

export const sendOrder = order => dispatch => {
  axios.post(`${ baseURL }/order`, order)
    .then((res) => {
      // console.log(res.status);
      dispatch({ type: C.EMPTY_CART });
    })
    .catch(err => console.log(err));
};
