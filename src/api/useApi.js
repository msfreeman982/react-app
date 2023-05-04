"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_BASE = 'https://gateway.marvel.com:443/v1/public';
const API_KEY = 'fe24f95c382853613a3bcae73647175d';
const useApi = () => {
    const getCharacters = (offset = 0, limit = 10) => {
        return fetch(`${API_BASE}/characters?apikey=${API_KEY}&offset=${offset}&limit=${limit}`)
            .then(response => response.json())
            .catch(error => Promise.reject(`Failed to fetch characters: ${error.message}`));
    };
    const getCharacter = (id) => {
        return fetch(`${API_BASE}/characters/${id}?apikey=${API_KEY}`)
            .then(response => response.json())
            .catch(error => Promise.reject(`Failed to fetch characters: ${error.message}`));
    };
    return { getCharacters, getCharacter };
};
exports.default = useApi;
