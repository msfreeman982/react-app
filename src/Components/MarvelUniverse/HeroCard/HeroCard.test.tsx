import axios from 'axios';
import HeroCard from '../HeroCard/HeroCard';
import React from 'react';
import {render, fireEvent, waitFor, getByTestId} from '@testing-library/react';

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App', () => {
    const renderComponent = () => (render(<HeroCard />));

    test('renders learn react link', async () => {

        const { getByText, getByTestId } = renderComponent();

        // Provide the data object to be returned
        mockedAxios.get.mockResolvedValue({
            data: [
                {
                    id: 1,
                    name: 'Joe Doe',
                    thumbnail: {path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16', extension: 'jpg'},
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    thumbnail: {path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16', extension: 'jpg'},
                }
            ],
        });

        fireEvent.click(getByText('Get users'));

        await waitFor(() => {
            const hero = getByTestId('hero-item');
            expect(hero).toHaveLength(2);
            expect(hero[0]).toHaveTextContent('Joe Doe');
            expect(hero[1]).toHaveTextContent('Jane Doe');
        });
    });
})