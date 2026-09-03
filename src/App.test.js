import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createAppStore } from './app/store';
import App from './App';

function renderApp() {
  return render(
    <Provider store={createAppStore()}>
      <App />
    </Provider>
  );
}

const rowCount = (container) => container.querySelectorAll('.data-table tbody tr').length;

test('renders the data view with every entry by default', () => {
  const { getByLabelText, getByText, container } = renderApp();

  expect(getByLabelText('stat')).toBeInTheDocument();
  expect(getByLabelText('d-viewer')).toBeInTheDocument();
  expect(getByText('Alice')).toBeInTheDocument();
  expect(getByText('Bob')).toBeInTheDocument();
  expect(rowCount(container)).toBe(10);
});

test('switches to the stat view from the header', () => {
  const { getByLabelText, getByText } = renderApp();

  fireEvent.click(getByLabelText('stat'));

  expect(getByText(/entries: 10/)).toBeInTheDocument();
  expect(getByText(/happy: 4 \(40%\)/)).toBeInTheDocument();
  expect(getByText(/neutral: 5 \(50%\)/)).toBeInTheDocument();
});

test('applies the sex filter to the data view only after "apply"', () => {
  const { getByLabelText, getByText, queryByText, container } = renderApp();

  fireEvent.click(getByLabelText('female'));
  // Nothing is filtered until the user applies the selection.
  expect(getByText('Bob')).toBeInTheDocument();

  fireEvent.click(getByText('apply'));

  expect(getByText('Alice')).toBeInTheDocument();
  expect(queryByText('Bob')).toBeNull();
  expect(rowCount(container)).toBe(5);
});

test('applies the mood filter to both views', () => {
  const { getByLabelText, getByText, container } = renderApp();

  fireEvent.change(getByLabelText('mood'), {target: {value: 'happy'}});
  fireEvent.click(getByText('apply'));

  expect(rowCount(container)).toBe(4);

  fireEvent.click(getByLabelText('stat'));
  expect(getByText(/entries: 4/)).toBeInTheDocument();
  expect(getByText(/happy: 4 \(100%\)/)).toBeInTheDocument();
});

test('shows an empty state when no entry matches the filter', () => {
  const { getByLabelText, getByText } = renderApp();

  fireEvent.click(getByLabelText('male'));
  fireEvent.change(getByLabelText('mood'), {target: {value: 'sad'}});
  fireEvent.click(getByText('apply'));

  expect(getByText(/no entries match the filter/)).toBeInTheDocument();
});

test('reset clears the filter', () => {
  const { getByLabelText, getByText, container } = renderApp();

  fireEvent.click(getByLabelText('female'));
  fireEvent.click(getByText('apply'));
  expect(rowCount(container)).toBe(5);

  fireEvent.click(getByText('reset'));
  expect(rowCount(container)).toBe(10);
});
