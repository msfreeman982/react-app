import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders learn react link', () => {
    render(<App />);
    screen.debug();
    const HeroDescription = screen.getByText(/Choose hero/i);
    expect(HeroDescription).toBeInTheDocument();
});
