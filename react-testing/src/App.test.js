import { render, screen } from '@testing-library/react';
import App from './App';

test('renders expected content', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pera/i);
  expect(linkElement).toBeInTheDocument();
});