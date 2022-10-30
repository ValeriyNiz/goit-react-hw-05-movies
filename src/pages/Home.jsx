import React from 'react';
import PropTypes from 'prop-types';
import MovieList from 'components/MovieList/MovieList';
import { useEffect } from 'react';
import { getTrendMovies } from 'httpClient';
import { useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendMovies().then(resp => {
      setMovies(resp.results);
    });
  }, []);

  return (
    <div>
      <h1>Header</h1>
      <MovieList movieList={movies} />
    </div>
  );
};

Home.propTypes = {};

export default Home;
