import React, { useState, useEffect } from 'react';
import { getCast } from 'httpClient';
import { useParams } from 'react-router-dom';
import ActorList from 'components/ActorList/ActorList';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCast(movieId).then(resp => {
      setCast(resp.cast);
    });
  }, [movieId]);

  return cast ? <ActorList cast={cast} /> : <p>No information</p>;
};

export default Cast;
