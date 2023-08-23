import {describe, test, expect,vi } from 'vitest';
import { render, fireEvent, screen} from '@testing-library/react';
import Form from './index';

describe.skip('App component', () => {

test.skip('submits form and calls handleApiCall', async () => {
  const mockHandleApiCall = vi.fn();
  render( <Form handleApiCall={mockHandleApiCall}/>);


  const goButton = screen.getByRole('button', { name: /GO!/i });
  fireEvent.click(goButton);

  expect(mockHandleApiCall).toHaveBeenCalledWith({
    selectValue: 'get',
  });
});
});