import { render, screen } from '@testing-library/react';
import App from './App';


test('renders a part of the Product component in the App component', () => {
  render(<App />);
  const productElement = screen.getByText(/What We Do/i); // Replace with actual text from Product component
  expect(productElement).toBeInTheDocument();
});