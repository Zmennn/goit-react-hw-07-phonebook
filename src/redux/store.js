import { createStore } from 'redux';

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
};

function reducer(state = {}, action) {
  console.log('action log', action);
  return state;
}

const store = createStore(reducer, preloadState);

export default store;
