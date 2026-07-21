import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders navigation buttons for the stat and data views', () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByLabelText('stat')).toBeInTheDocument();
  expect(getByLabelText('d-viewer')).toBeInTheDocument();
});
