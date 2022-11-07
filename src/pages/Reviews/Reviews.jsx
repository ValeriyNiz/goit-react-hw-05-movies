import React, { useState, useEffect } from 'react';
import { getReviews } from 'httpClient';
import { useParams } from 'react-router-dom';
import ReviewList from 'components/ReviewList/ReviewList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(movieId).then(resp => {
      setReviews(resp.results);
    });
  }, [movieId]);

  const renderReviews = () => {
    return reviews.length ? (
      <ReviewList reviews={reviews} />
    ) : (
      <p>No reviews</p>
    );
  };

  return reviews ? renderReviews() : <p>Loading...</p>;
};

export default Reviews;
