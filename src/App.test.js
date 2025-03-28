import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections', () => {
  render(<App />);
  expect(screen.getByText(/My Portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome to My Portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/My Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
});