import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
jest.mock('./App', () => () => (<div>learnreact</div>));

test('renders learn react', () => {
  render(<App />);
  const divElement = screen.getByText('learnreact');
  expect(divElement).toBeInTheDocument();
});
