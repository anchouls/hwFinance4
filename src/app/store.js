import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/pageSlice';
import filterReducer from './reducers/filterSlice';

export const store = configureStore({
  reducer: {
    page: counterReducer,
    filter: filterReducer,
  },
});
