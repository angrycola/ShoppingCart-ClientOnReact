import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { setAuthToken } from '../lib/setAuthToken';
import C from '../constants';


const baseURL = 'http://localhost:8080/users';

export const setCurrentUser = user => ({ type: C.SET_CURRENT_USER, payload: user });

export const signInRequest = userData => dispatch => axios.post(`${ baseURL }/signin`, userData)
  .then(res => {
    const token = res.data.token;
    localStorage.setItem('token', token);

    setAuthToken(token);
    dispatch(setCurrentUser(jwtDecode(token)));
});

export const signUpRequest = userData => dispatch => axios.post(`${ baseURL }/signup`, userData);

export const isUserExists = email => dispath => axios.post(`${ baseURL }/pre`, { email });

export const signOutUser = () => dispatch => {
  localStorage.removeItem('token');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
