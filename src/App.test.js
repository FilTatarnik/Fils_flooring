import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline and schedule call-to-action', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getAllByText(/free estimate/i).length).toBeGreaterThan(0);
});
