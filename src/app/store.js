import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/pageSlice';

export const store = configureStore({
  reducer: {
    page: counterReducer,
  },
});
