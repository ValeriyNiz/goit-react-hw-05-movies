import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { getReviews } from 'httpClient';
import { useParams } from 'react-router-dom';
import style from './Reviews.module.css';

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
            <h5 className={style.reviewsTitle}>Author: {review.author}</h5>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No reviews</p>
  );
};

// Reviews.propTypes = {};

export default Reviews;
