import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo App heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/todo App/i);
  expect(headingElement).toBeInTheDocument();
});
