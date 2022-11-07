import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_URL } from 'constants';
import style from './ActorList.module.css';

const ActorList = ({ cast }) => {
  return (
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
  );
};

ActorList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default ActorList;
