import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { getCast } from 'httpClient';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from 'constants';
import style from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCast(movieId).then(resp => {
      setCast(resp.cast);
    });
  }, [movieId]);

  return cast ? (
    <ul>
      {cast.map(actor => {
        return (
          <li className={style.castItem} key={actor.id}>
            <div className={style.castItemDiv}>
              <img
                src={
                  actor.profile_path
                    ? `${IMAGE_URL}/w92${actor.profile_path}`
                    : 'https://via.placeholder.com/92x138?text=No+image'
                }
                alt={actor.name}
              />
            </div>
            <p className={style.castItemText}>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No information</p>
  );
};

export default Cast;
