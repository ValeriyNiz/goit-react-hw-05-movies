import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getReviews } from 'httpClient';
import { useParams } from 'react-router-dom';

const Reviews = props => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getReviews(movieId).then(resp => {
      setReviews(resp.results);
    });
  }, [movieId]);

  return reviews ? (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h5>Author: {review.author}</h5>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No reviews</p>
  );
};

Reviews.propTypes = {};

export default Reviews;
