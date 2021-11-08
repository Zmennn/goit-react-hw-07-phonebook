import { v4 as uuidv4 } from 'uuid';
// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { submitRecord, changeFilter, deleteRecord } from './actions';

function delRecord(state = {}, action) {
  switch (action.type) {
    case 'deleteRecord':
      const data = state.contacts.filter(elem => elem.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(data));
      return { ...state, contacts: data };

    default:
      return state;
  }
}

function addRecord(state = {}, action) {
  switch (action.type) {
    case 'submitRecord':
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

    default:
      return state;
  }
}

function filterRecord(state = {}, action) {
  switch (action.type) {
    case 'changeFilter':
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}

export const reducer = createReducer(
  {},
  {
    [submitRecord]: addRecord,
    [changeFilter]: filterRecord,
    [deleteRecord]: delRecord,
  },
);
