import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Navbar from './index.jsx';

test('Navbar component renders correctly', () => {
  const { getByText, getByRole } = render(<Navbar />);
  
 
  const navbar = getByRole('navigation');
  expect(navbar).toBeInTheDocument();


  expect(navbar).not.toHaveClass('open');

 
  expect(getByText('Home')).toBeInTheDocument();

});

test('Navbar toggles menu on menu icon click', () => {
  render(<Navbar />);


});

test('Navbar closes menu on link click', () => {
  const { getByRole, getByText } = render(<Navbar />);
  
 ;

  
  const homeLink = getByText('Home');
  fireEvent.click(homeLink);
  const aboutLink=getByText('About');
  fireEvent.click(aboutLink);



  const navbar = getByRole('navigation');
  expect(navbar).not.toHaveClass('open');
});
