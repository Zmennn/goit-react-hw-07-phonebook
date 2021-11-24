import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = '/contacts';
axios.defaults.baseURL = 'https://61966211af46280017e7e02c.mockapi.io';

export const fetchPhones = createAsyncThunk('phones/fetchList', async () => {
  const phones = await axios.get(url);
  return phones.data;
});

export const deleteById = createAsyncThunk('phones/delete', async ev => {
  const id = ev.target.id;
  await axios.delete(`${url}/${id}`);
  return;
});

export const submitPhone = createAsyncThunk('phones/submit', async data => {
  await axios.post(url, data);
  return;
});
