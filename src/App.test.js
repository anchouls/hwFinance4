import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders stat and data navigation buttons', () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByLabelText('stat')).toBeInTheDocument();
  expect(getByLabelText('d-viewer')).toBeInTheDocument();
});
