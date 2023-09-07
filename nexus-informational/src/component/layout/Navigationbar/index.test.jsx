import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Navbar from './index.jsx';

test('Navbar component renders correctly', () => {
  const { getByText, getByRole } = render(<Navbar />);
  
 
  const navbar = getByRole('navigation');
  expect(navbar).toBeInTheDocument();


  expect(navbar).not.toHaveClass('open');

 
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('About Us')).toBeInTheDocument();
  expect(getByText('What We Do')).toBeInTheDocument();
  expect(getByText('Contact Us')).toBeInTheDocument();
});

test('Navbar toggles menu on menu icon click', () => {
  render(<Navbar />);


});

test('Navbar closes menu on link click', () => {
  const { getByRole, getByText } = render(<Navbar />);
  
 ;

  
  const homeLink = getByText('Home');
  fireEvent.click(homeLink);
  const aboutLink=getByText('About Us');
  fireEvent.click(aboutLink);
  const weLink=getByText('What We Do');
  fireEvent.click(weLink);
  const contactus=getByText('Contact Us')
  fireEvent.click(contactus);


  const navbar = getByRole('navigation');
  expect(navbar).not.toHaveClass('open');
});
