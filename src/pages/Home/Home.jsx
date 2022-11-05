import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import MovieList from 'components/MovieList/MovieList';
import { getTrendMovies } from 'httpClient';
import style from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendMovies().then(resp => {
      setMovies(resp.results);
    });
  }, []);

  return (
    <div className={style.home}>
      <hr />
      <h1 className={style.homeTitle}>Trending today</h1>
      <MovieList movieList={movies} />
    </div>
  );
};

// Home.propTypes = {};

export default Home;
