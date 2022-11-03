import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getCast } from 'httpClient';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from 'constants';

const Cast = props => {
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
          <li key={actor.id}>
            <div>
              <img
                src={
                  actor.profile_path
                    ? `${IMAGE_URL}/w92${actor.profile_path}`
                    : 'https://via.placeholder.com/92x138?text=No+image'
                }
                alt={actor.name}
              />
            </div>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No information</p>
  );
};

Cast.propTypes = {};

export default Cast;
