import axios from 'axios';
import C from '../constants';

const baseURL = 'https://shopping-cart-server.herokuapp.com/products';

export const indexProducts = () => dispatch => axios.get(baseURL)
  .then(res => {
    const products = res.data.docs;
    dispatch({ type: C.SET_PRODUCTS, payload: products });
  });
