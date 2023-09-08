import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../Footer';



describe('Footer component', () => {
  it('renders the Footer component', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('.footer');
    
 
  });

  it('displays the logo', () => {
    const { getByAltText } = render(<Footer />);
    const logo = getByAltText('logo');
    
   
    expect(logo).toBeInTheDocument();
  });

  it('displays contact information', () => {
    const { getByText } = render(<Footer />);
    
   
    expect(getByText('Contact Us')).toBeInTheDocument();
    expect(getByText('+254742325744')).toBeInTheDocument();
    expect(getByText('niunexuss@gmail.com')).toBeInTheDocument();
    expect(getByText('Nairobi, Kenya')).toBeInTheDocument();
  });

  it('displays support links', () => {
    const { getByText } = render(<Footer />);
    
   
    expect(getByText('Support')).toBeInTheDocument();
    expect(getByText('FAQs')).toBeInTheDocument();
    expect(getByText('Terms')).toBeInTheDocument();
    expect(getByText('Privacy')).toBeInTheDocument();
  });

  it('displays newsletter subscription', () => {
    const { getByPlaceholderText, getByText } = render(<Footer />);
    
   
    expect(getByPlaceholderText('Subscribe to our newsletter')).toBeInTheDocument();
    expect(getByText('Subscribe')).toBeInTheDocument();
  });

  it('displays copyright notice', () => {
    const { getByText } = render(<Footer />);
    
    
    expect(getByText('Copyright 2023. All rights reserved by Nexus Group')).toBeInTheDocument();
  });
});

