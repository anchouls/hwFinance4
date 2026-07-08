import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders the header navigation buttons', () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByLabelText(/stat/i)).toBeInTheDocument();
  expect(getByLabelText(/d-viewer/i)).toBeInTheDocument();
});

test('renders the data view by default', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/data view/i)).toBeInTheDocument();
});
