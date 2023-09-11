

import React from 'react';
import { getByText, render, getByPlaceholderText } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders the Footer component', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('.footer');

    expect(footer).toBeInTheDocument();
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

    expect(getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(getByText('Subscribe')).toBeInTheDocument();
  });

  
});

