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

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
