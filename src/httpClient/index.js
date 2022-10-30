import { config } from './config';

export const getTrendMovies = () => {
  return fetch(
    `${config.baseUrl}/trending/movie/week?api_key=${config.apiKey}`
  ).then(resp => {
    return resp.json();
  });
};
