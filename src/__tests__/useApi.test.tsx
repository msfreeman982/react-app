import {renderHook} from '@testing-library/react';
import useApi from '../api/useApi';

const mockCharacters = {
    data: {
        results: [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Captain America' },
            { id: 3, name: 'Thor' },
        ],
    },
};

const mockCharacter = {
    data: {
        results: [{ id: 1, name: 'Iron Man' }],
    },
};

describe('useApi', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        (global.fetch as jest.Mock).mockClear();
        delete global.fetch;
    });

    it('should fetch characters from the API', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: async () => mockCharacters,
        });

        const { result } = renderHook(() => useApi());
        const characters = await result.current.getCharacters();

        expect(characters.data.results).toEqual(mockCharacters.data.results);
    });


    it('should fetch a character from the API', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: async () => mockCharacters,
        });

        const { result } = renderHook(() => useApi());
        const characters = await result.current.getCharacters();

        expect(characters.data.results[0]).toEqual(mockCharacter.data.results[0]);
    });
});
