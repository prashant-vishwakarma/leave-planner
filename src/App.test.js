import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Continue Afresh link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Continue Afresh/i);
  expect(linkElement).toBeInTheDocument();
});
