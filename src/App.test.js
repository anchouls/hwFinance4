import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

test('renders the header navigation buttons', () => {
  const { getByLabelText } = renderApp();

  expect(getByLabelText('stat')).toBeInTheDocument();
  expect(getByLabelText('d-viewer')).toBeInTheDocument();
});

test('renders the data view by default', () => {
  const { getByText } = renderApp();

  // pageSlice initial state is `page: 'data'`, so DataViewer is shown.
  expect(getByText(/data view/i)).toBeInTheDocument();
});
