import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import combineReducers from './reducers';
import { reducer } from './reducers';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const initData = () => {
  const data = localStorage.getItem('contacts');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const preloadState = {
  contacts: initData(),
  filter: '',
};

console.log(preloadState);

const store = configureStore({
  reducer: reducer,
  middleware: middleware,
  preloadedState: preloadState,
});

// const store = createStore(
//   reducer,
//   preloadState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

export default store;
