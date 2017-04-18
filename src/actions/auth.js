import axios from 'axios';

const baseURL = 'http://localhost:8080/users';


export const signUpRequest = userData => dispatch => axios.post(`${ baseURL }/signup`, userData);

export const isUserExists = email => dispath => axios.post(`${ baseURL }/pre`, { email });
