import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders without crashing', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container.firstChild).toBeTruthy();
});

test('renders stat and data navigation buttons', () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByLabelText('stat')).toBeTruthy();
  expect(getByLabelText('d-viewer')).toBeTruthy();
});
