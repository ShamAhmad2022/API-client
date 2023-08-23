import { test, describe,expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Results from './index';

describe('App component', () => {
test.skip('renders loading state when loading prop is true', () => {
  render(<Results loading={true} />);

  const loadingMessage = screen.getByText(/loading.../i);
  expect(loadingMessage).toBeTruthy();
});

test('renders JSON data when data prop is provided', () => {
  const mockData = { key: 'value' };

  render(<Results data={mockData} />);

  const jsonData = screen.getByText(/"key": "value"/i);
  expect(jsonData).toBeTruthy();
});

test('does not render when data prop is not provided', () => {
  render(<Results />);

  const resultsSection = screen.queryByRole('section');
  expect(resultsSection).toBeNull();
});
});