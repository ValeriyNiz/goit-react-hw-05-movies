import { config } from './config';

export const getTrendMovies = () => {
  return fetch(
    `${config.baseUrl}/trending/movie/week?api_key=${config.apiKey}`
  ).then(resp => {
    return resp.json();
  });
};

export const getMovieDetails = movieId => {
  return fetch(
    `${config.baseUrl}/movie/${movieId}?api_key=${config.apiKey}`
  ).then(resp => {
    return resp.json();
  });
};

export const getCast = movieId => {
  return fetch(
    `${config.baseUrl}/movie/${movieId}/credits?api_key=${config.apiKey}`
  ).then(resp => {
    return resp.json();
  });
};

export const getReviews = movieId => {
  return fetch(
    `${config.baseUrl}/movie/${movieId}/reviews?api_key=${config.apiKey}`
  ).then(resp => {
    return resp.json();
  });
};

export const getSearchMovieResults = text => {
  return fetch(
    `${config.baseUrl}/search/movie?api_key=${config.apiKey}&query=${text}`
  ).then(resp => {
    return resp.json();
  });
};
