
import {expect , test} from 'vitest';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import History from './index';

test('renders learn react link', () => {
  render(<History />);
  const linkElement = screen.getByText(/History:/i);
  expect(linkElement).toBeInTheDocument();
});