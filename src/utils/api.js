import axios from 'axios';

const API_KEY = 'd20039f4';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query = '', page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        page: page,
      },
    });

    if (response.data.Response === 'True') {
      return response.data.Search;
    } else {
      console.error('Error fetching movies:', response.data.Error);
      return [];
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
