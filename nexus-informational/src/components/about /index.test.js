import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../about ';



describe ("About Component", ()=>{
  test("renders About component with correct text", () => {
    render(<About />);

    expect(screen.getByText("Why Nexus?")).toBeInTheDocument();
    expect(screen.getByTestId('text')).toBeInTheDocument();
    expect(screen.getByTestId('square1')).toBeInTheDocument();
    expect(screen.getByTestId('square2')).toBeInTheDocument();
    expect(screen.getByTestId('circle')).toBeInTheDocument();
  });
});








