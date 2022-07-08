import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';
import { filter } from './reduser';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
