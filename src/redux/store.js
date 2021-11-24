import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers';

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
