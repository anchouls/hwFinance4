import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './reducers/pageSlice';
import filterReducer from './reducers/filterSlice';

// Exported as a factory as well so tests can start from a clean state instead
// of sharing the app-wide store between cases.
export const createAppStore = () => configureStore({
  reducer: {
    page: pageReducer,
    filter: filterReducer,
  },
});

export const store = createAppStore();
