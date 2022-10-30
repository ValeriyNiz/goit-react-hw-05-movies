import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = props => {
  const { movieId } = useParams();

  return (
    <div>
      Details for movie {movieId}
      <Link to="reviews">Reviews</Link>
      <Link to="cast">Cast</Link>
      <h2>Ниже аутлет</h2>
      <Outlet />
    </div>
  );
};

MovieDetails.propTypes = {};

export default MovieDetails;
