import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './reducers/pageSlice';
import themeReducer from './reducers/themeSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    theme: themeReducer,
  },
});
