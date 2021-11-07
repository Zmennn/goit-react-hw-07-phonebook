// import { combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

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

function reducer(state, action) {
  switch (action.type) {
    case 'deleteRecord':
      const data = state.contacts.filter(elem => elem.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(data));
      return { ...state, contacts: data };
    case 'submitRecord':
      console.log(action.payload);
      console.log(state);

      if (!state.contacts.find(el => el.name === action.payload[0])) {
        const data = [
          ...state.contacts,
          { name: action.payload[0], number: action.payload[1], id: uuidv4() },
        ];
        localStorage.setItem('contacts', JSON.stringify(data));
        return { ...state, contacts: data };
      } else {
        alert(`${action.payload[0]} is already in contacts`);
        return state;
      }
    case 'changeFilter':
      return { ...state, filter: new RegExp(`^${action.payload}`) };

    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//     del,
// });
// const store = configureStore({
//     reducer: {
//         del,
//     },
// });
const store = createStore(
  reducer,
  preloadState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
