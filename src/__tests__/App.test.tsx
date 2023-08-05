import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from 'App';
import { About } from 'pages/about';

describe('App component', () => {
  it('copyright link working', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Copyright' })).toHaveProperty(
      'href',
      'https://github.com/marcantoinedutoit/',
    );
  });

  it('renders header component', () => {
    render(<App />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders footer component', () => {
    render(<App />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});

describe('Home page', () => {
  it('renders the correct title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText('Boilerplate');
    expect(titleElement).toBeInTheDocument();
  });
});

describe('About page', () => {
  test('renders the about page title', () => {
    const { getByText } = render(<About />);
    const pageTitle = getByText('About');
    expect(pageTitle).toBeInTheDocument();
  });
});
