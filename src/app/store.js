import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/pageSlice';
// TODO: filterSlice.js is currently empty — once it exports a reducer,
// register it here (e.g. `filter: filterReducer`) so Filter.js can use it.

export const store = configureStore({
  reducer: {
    page: counterReducer,
  },
});
