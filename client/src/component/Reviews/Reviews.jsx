import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Reviews.styles.css';
import data from '../Reviews/FakeReviewData.js';
import IndividualReview from '../Reviews/IndividualReview.jsx';

const Reviews = () => {
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    setReviewData(data);
  }, []);
  return (
    <div>
      {reviewData !== null &&
        reviewData.reviews.map((review) => (
          <IndividualReview review={review} />
        ))}
    </div>
  );
};

export default Reviews;
