import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarvelUniverse from '../Components/Pages/MainPage/MainPage';

test('find text', () => {
    render(<MarvelUniverse />);
    screen.debug();
    const HeroDescription = screen.getByText(/Choose hero/i);
    expect(HeroDescription).toBeInTheDocument();
});
