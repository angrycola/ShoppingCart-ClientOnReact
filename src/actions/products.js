import axios from 'axios';
import C from '../constants';

const baseURL = 'http://localhost:8080/products';

export const indexProducts = () => dispatch => axios.get(baseURL)
  .then(res => {
    const products = res.data.docs;
    dispatch({ type: C.SET_PRODUCTS, payload: products });
  });
