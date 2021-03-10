import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import App from './App';

// use describe, it pattern
describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/My first Circle Ci job/i)).toBeInTheDocument();
  });
});