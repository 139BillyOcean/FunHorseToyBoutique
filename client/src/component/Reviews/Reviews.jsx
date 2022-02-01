import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Reviews.styles.css';
import data from '../Reviews/FakeReviewData.js';

import IndividualReview from '../Reviews/IndividualReview.jsx';
import ReviewForm from '../Reviews/ReviewForm.jsx';

const Reviews = () => {
  const [reviewData, setReviewData] = useState(null);
  const [reviewSubData, setReviewSubData] = useState(null);
  const [reviewCount, setReviewCount] = useState(2);

  useEffect(() => {
    setReviewData(data);
    setReviewSubData(data.reviews.slice(0, 5));
  }, []);

  useEffect(() => {
    setReviewSubData(data.reviews.slice(0, reviewCount));
  }, [reviewCount]);

  return (
    <div>
      <ReviewForm />
      {reviewSubData !== null &&
        reviewSubData.map((review) => (
          <span>
            <IndividualReview review={review} />
          </span>
        ))}
      <button onClick={() => setReviewCount(reviewCount + 2)}>
        show more reviews
      </button>
    </div>
  );
};

export default Reviews;
