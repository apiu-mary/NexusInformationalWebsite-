import { render, screen } from '@testing-library/react';
import App from './App';


test('renders a part of the Product component in the App component', () => {
  render(<App />);
  const productElement = screen.getByText(/What We Do/i);
  expect(productElement).toBeInTheDocument();
});