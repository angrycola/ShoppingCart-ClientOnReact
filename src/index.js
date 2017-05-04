import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import reducer from './reducers';
import { setAuthToken } from './lib/setAuthToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/auth';

import { setCart } from './lib/cart';
import { indexCart } from './actions/cart';

import './styles/index.css';


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

if (localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.token)));
}

if (localStorage.cart) {
  const cart = JSON.parse(localStorage.cart);
  store.dispatch(indexCart(cart))
} else {
  const cart = setCart();
  store.dispatch(indexCart(cart))
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
