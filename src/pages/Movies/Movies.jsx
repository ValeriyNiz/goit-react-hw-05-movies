import React, { useState, useEffect } from 'react';
import { getSearchMovieResults } from 'httpClient';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import style from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      getSearchMovieResults(query).then(resp => {
        setMovies(resp.results);
      });
    }
  }, [searchParams]);

  const onSubmit = event => {
    event.preventDefault();
    setSearchParams({
      query: event.target.elements.search.value,
    });
    event.target.elements.search.value = '';
  };

  return (
    <div className={style.moviesForm}>
      <form onSubmit={onSubmit}>
        <input name="search" type="text" />
        <button>Search</button>
      </form>
      {movies ? <MovieList movieList={movies} /> : <p>No movies</p>}
    </div>
  );
};

export default Movies;
