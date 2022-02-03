import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Reviews.styles.css';
import data from '../Reviews/FakeReviewData.js';

const axios = require('axios');

import IndividualReview from '../Reviews/IndividualReview.jsx';
import ReviewForm from '../Reviews/ReviewForm.jsx';

const Reviews = ({ productId }) => {
  const [reviewData, setReviewData] = useState(null);
  const [reviewSubData, setReviewSubData] = useState(null);
  const [reviewCount, setReviewCount] = useState(2);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/overview/${productId}`)
      .then(
        (response) => (
          setReviewData(response.data.reviews),
          setReviewSubData(response.data.reviews.slice(0, 5))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (reviewData !== null) {
      setReviewSubData(reviewData.slice(0, reviewCount));
    }
  }, [reviewCount]);

  return (
    <div>
      <ReviewForm productId={productId} />
      <div>Reviews</div>
      <div className={styles.reviewSection}>
        {reviewSubData !== null &&
          reviewSubData.map((review) => (
            <IndividualReview review={review} productId={productId} />
          ))}
      </div>
      <button onClick={() => setReviewCount(reviewCount + 2)}>
        show more reviews
      </button>
    </div>
  );
};

export default Reviews;
