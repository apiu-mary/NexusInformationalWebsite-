import React from 'react';
import { render } from '@testing-library/react'; 
import Team from './index';

describe('Team Component', () => {
  it('renders team members', () => {
    const { getByText, getByAltText } = render(<Team />);
    //check team member name
    expect(getByText('Alice Moraa')).toBeInTheDocument();
    expect(getByText('Elizabeth Njoroge')).toBeInTheDocument();
    expect(getByText('Rachel Tuyishimire')).toBeInTheDocument();
    expect(getByText('Mariagoretti Kimani')).toBeInTheDocument();
    expect(getByText('Mary Apiu Agou')).toBeInTheDocument();

    // Check team member images 
    expect(getByAltText('Alice Moraa')).toBeInTheDocument();
    expect(getByAltText('Elizabeth Njoroge')).toBeInTheDocument();
    expect(getByAltText('Rachel Tuyishimire')).toBeInTheDocument();
    expect(getByAltText('Mariagoretti Kimani')).toBeInTheDocument();
    expect(getByAltText('Mary Apiu Agou')).toBeInTheDocument();
  });

  it('renders the team title', () => {
    const { getByText } = render(<Team />);
    expect(getByText('Our Team')).toBeInTheDocument();
  });

  it('renders the correct number of team members', () => {
    const { getAllByTestId } = render(<Team />);
    const teamMembers = getAllByTestId('team-member');
    expect(teamMembers.length).toBe(5);
  });


});
