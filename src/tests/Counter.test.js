import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText('0');
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText('0');
  expect(initialCount).toBeInTheDocument();
  userEvent.click(screen.getByText('+'));
  const updatedCount = screen.getByText('1');
  expect(updatedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText('0');
  expect(initialCount).toBeInTheDocument();
  userEvent.click(screen.getByText('-'));
  const updatedCount = screen.getByText('-1');
  expect(updatedCount).toBeInTheDocument();
});
