import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet, useParams } from 'react-router-dom';
import style from './MovieDetails.module.css';
import { getMovieDetails } from 'httpClient';
import { IMAGE_URL } from 'constants';

const MovieDetails = props => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(resp => {
      setMovieDetails(resp);
    });
  }, [movieId]);

  const genres = useMemo(() => {
    return movieDetails?.genres.map(genre => genre.name).join(', ');
  }, [movieDetails]);

  return movieDetails ? (
    <div>
      <div>
        <button>Go back</button>
      </div>
      <div className={style.movieDetails}>
        <div>
          <img
            alt=""
            width="300"
            height="450"
            src={`${IMAGE_URL}/w300${movieDetails.poster_path}`}
          />
        </div>
        <div>
          <h1>{movieDetails.title}</h1>
          <p>User score: {movieDetails.vote_average.toFixed(1)}</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <hr />
      <Link to="reviews">Reviews</Link>
      <Link to="cast">Cast</Link>
      <Outlet />
    </div>
  ) : (
    <span>Loading...</span>
  );
};

MovieDetails.propTypes = {};

export default MovieDetails;
