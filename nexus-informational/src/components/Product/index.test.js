import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './index';

describe("Product Component", ()=>{

  test('renders Product component in the App component', () => {
    render(<Product />);
  
    expect(screen.getByText("What We Do")).toBeInTheDocument();
    expect(screen.getByText("Current Units")).toBeInTheDocument();
    expect(screen.getByText("By utilizing the Nexus Interface Unit, users gain the ability to conveniently view their present power units")).toBeInTheDocument();
    expect(screen.getByText("Power History")).toBeInTheDocument();
    expect(screen.getByText("The Nexus Interface Unit offers a capability to display users power history")).toBeInTheDocument();
    expect(screen.getByText("Share Units")).toBeInTheDocument();
    expect(screen.getByText("The Nexus Interface Unit provides the capacity to facilitate unit sharing among diverse users.")).toBeInTheDocument();
  });
     
    });
  

