import axios from "axios";

const API_BASE = 'https://gateway.marvel.com:443/v1/public';
const API_KEY = 'fe24f95c382853613a3bcae73647175d';

const instance = axios.create({
  baseURL: API_BASE,
  timeout: 5000,
  params: {
    apikey: API_KEY,
  }
})
const useApi = () => {
  const getCharacters = (offset: number = 0, limit: number = 10) => {
    return  instance.get(`/characters`, {params: {offset, limit}})
      .then(response => {
      return response.data
    });
  }

  const getCharacter = (id: number) => {
    return instance.get(`/characters/${id}`)
      .then(response => {
        return response.data
      });
  }

  return {
    getCharacters,
    getCharacter
  }

}

export default useApi;