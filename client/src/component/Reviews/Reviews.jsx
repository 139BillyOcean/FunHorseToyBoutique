import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Reviews.styles.css';
import data from '../Reviews/FakeReviewData.js';

import IndividualReview from '../Reviews/IndividualReview.jsx';
import ReviewForm from '../Reviews/ReviewForm.jsx';

const Reviews = () => {
  const [reviewData, setReviewData] = useState(null);
  const [reviewCount, setReviewCount] = useState(5);

  useEffect(() => {
    setReviewData(data);
  }, []);

  return (
    <div>
      <ReviewForm />
      {reviewData !== null &&
        reviewData.reviews.map((review) => (
          <IndividualReview review={review} />
        ))}
    </div>
  );
};

export default Reviews;
