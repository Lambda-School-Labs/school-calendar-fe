import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '../pages/index';

describe('index page', () => {
  it('should render h1 text', () => {
    const { getByText } = render(<Welcome />);
    const h1Element = getByText(/When you need more control and flexiblity\./);
    expect(h1Element).toBeInTheDocument();
  });
});
