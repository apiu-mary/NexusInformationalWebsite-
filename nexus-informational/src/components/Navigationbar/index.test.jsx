import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './index.jsx';



test('Navbar component renders correctly', () => {
  const { getByText } = render(<Navbar />);
 
  expect(getByText('Home')).toBeInTheDocument();

});

test('Navbar toggles menu on menu icon click', () => {
  render(<Navbar />);


});

test('Navbar closes menu on link click', () => {
  const {getByText } = render(<Navbar />);
  
  const homeLink = getByText('Home');
  fireEvent.click(homeLink);
  const aboutLink=getByText('About Us');
  fireEvent.click(aboutLink);

});
