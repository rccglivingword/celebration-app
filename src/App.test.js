import { render, screen } from '@testing-library/react';
import React from "react";
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('App component renders correctly', () => {
  render(<App />);
  
  // Use screen queries to interact with the component
  const appNavBar = screen.getByText('AppNavBar'); // Replace with the actual text
  const logo = screen.getByText('Logo'); // Replace with the actual text
  const formPage = screen.getByText('FormPage'); // Replace with the actual text
  
  // Add your assertions to test if the components are rendered as expected
  expect(appNavBar).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
  expect(formPage).toBeInTheDocument();
  
  // You can add more assertions here based on your component's behavior
});

// Add more test cases as needed
