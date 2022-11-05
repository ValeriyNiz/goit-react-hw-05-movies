import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ({ movieList }) => {
  return (
    <ul>
      {movieList.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

// MovieList.propTypes = {};

export default MovieList;
