import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

describe('index page', () => {
  it('should render h1 text', () => {
    const { getByText } = render(<Dashboard />);
    const h1Element = getByText(/Dashboard/);
    expect(h1Element).toBeInTheDocument();
  });
});
