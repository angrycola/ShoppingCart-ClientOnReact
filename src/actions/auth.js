import axios from 'axios';

const baseURL = 'http://localhost:8080/users';

export const signUpRequest = userData => dispatch => axios.post(`${ baseURL }/signup`, userData);
