import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import style from './MovieDetails.module.css';
import { getMovieDetails } from 'httpClient';
import { IMAGE_URL } from 'constants';
import { FidgetSpinner } from 'react-loader-spinner';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(resp => {
      setMovieDetails(resp);
    });
  }, [movieId]);

  const genres = useMemo(() => {
    return movieDetails?.genres.map(genre => genre.name).join(', ');
  }, [movieDetails]);

  const goBack = () => {
    navigate(-1);
  };

  return movieDetails ? (
    <div className={style.movieDetailsSection}>
      <hr />
      <div>
        <button className={style.movieDetailsBtn} onClick={goBack}>
          Go back
        </button>
      </div>
      <div className={style.movieDetails}>
        <div className={style.movieDetailsPoster}>
          <img
            alt=""
            width="230"
            height="350"
            src={`${IMAGE_URL}/w300${movieDetails.poster_path}`}
          />
        </div>
        <div>
          <h1 className={style.movieDetailsTitle}>{movieDetails.title}</h1>
          <p>User score: {movieDetails.vote_average.toFixed(1)}</p>
          <h2 className={style.movieDetailsTitle}>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h3 className={style.movieDetailsTitle}>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <hr />
      <Link className={style.movieDetailsLink} to="reviews">
        <b>Reviews</b>
      </Link>
      <Link className={style.movieDetailsLink} to="cast">
        <b>Cast</b>
      </Link>
      <hr />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
