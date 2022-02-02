import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Reviews.styles.css';
import data from '../Reviews/FakeReviewData.js';

const axios = require('axios');

import IndividualReview from '../Reviews/IndividualReview.jsx';
import ReviewForm from '../Reviews/ReviewForm.jsx';

const Reviews = () => {
  const [reviewData, setReviewData] = useState(null);
  const [reviewSubData, setReviewSubData] = useState(null);
  const [reviewCount, setReviewCount] = useState(2);
  const objectId = '61f860e9410e9efa6d69ce46';

  useEffect(() => {
    // setReviewData(data);
    // setReviewSubData(data.reviews.slice(0, 5));'
    axios
      .get(`http://localhost:3000/overview/${objectId}`)
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
      <ReviewForm />
      <div className={styles.reviewSection}>
        {reviewSubData !== null &&
          reviewSubData.map((review) => <IndividualReview review={review} />)}
      </div>

      <button onClick={() => setReviewCount(reviewCount + 2)}>
        show more reviews
      </button>
    </div>
  );
};

export default Reviews;
