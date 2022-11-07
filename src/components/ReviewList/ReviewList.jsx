import React from 'react';
import PropTypes from 'prop-types';
import style from './ReviewList.module.css';

const ReviewList = ({ reviews }) => {
  return (
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
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewList;
