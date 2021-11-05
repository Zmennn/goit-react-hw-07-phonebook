import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { myAction, aCtion2 } from './redux/actions';

console.log(store);
console.log(store.getState());
store.dispatch(myAction('ttyy'));
store.dispatch(aCtion2);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
