import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './app/reducers/pageSlice';
import filterReducer from './app/reducers/filterSlice';
import App from './App';

function renderApp() {
  const freshStore = configureStore({
    reducer: { page: pageReducer, filter: filterReducer },
  });
  return render(
    <Provider store={freshStore}>
      <App />
    </Provider>
  );
}

test('renders navigation buttons', () => {
  const { getByLabelText } = renderApp();
  expect(getByLabelText(/stat/i)).toBeInTheDocument();
  expect(getByLabelText(/d-viewer/i)).toBeInTheDocument();
});

test('switches to stat view when stat button is clicked', () => {
  const { getByLabelText, getByText } = renderApp();
  fireEvent.click(getByLabelText(/stat/i));
  expect(getByText(/stat view/i)).toBeInTheDocument();
});

test('renders data view by default', () => {
  const { getByText } = renderApp();
  expect(getByText(/data view/i)).toBeInTheDocument();
});
