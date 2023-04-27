const API_BASE = 'https://gateway.marvel.com:443/v1/public';
const API_KEY = 'fe24f95c382853613a3bcae73647175d';

const useApi = () => {

    const getCharacters = (offset: number = 0, limit: number = 10) => {
        return fetch(`${API_BASE}/characters?apikey=${API_KEY}&offset=${offset}&limit=${limit}`)
            .then(response => response.json())
            .catch(error => Promise.reject(`Failed to fetch characters: ${error.message}`));
    }

    const getCharacter = (id: number) => {
        return fetch(`${API_BASE}/characters/${id}?apikey=${API_KEY}`)
            .then(response => response.json())
            .catch(error => Promise.reject(`Failed to fetch characters: ${error.message}`));
    }

    return {getCharacters, getCharacter}
}

export default useApi;