import {describe, test,expect } from 'vitest';
import { render } from '@testing-library/react';
import Header from './index';
describe('App component', () => {

test('renders header with correct text', () => {
  const { getByText } = render(<Header />);

  const headerElement = getByText(/RESTy/i); 
  expect(headerElement).toBeTruthy();
});
})