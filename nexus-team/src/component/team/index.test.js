import React from 'react';
import { render } from '@testing-library/react'; 
import Team from './index';
 

describe('Team Component', () => {
  it('renders team members', () => {
    const { getByText } = render(<Team />);

    expect(getByText('Alice Moraa')).toBeInTheDocument();
    expect(getByText('Elizabeth Njoroge')).toBeInTheDocument();
    expect(getByText('Rachel Tuyishimire')).toBeInTheDocument();
    expect(getByText('Mariagoretti Kimani')).toBeInTheDocument();
    expect(getByText('Mary Apiu Agou')).toBeInTheDocument();
  });
});
