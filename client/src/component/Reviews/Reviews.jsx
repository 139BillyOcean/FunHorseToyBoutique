import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReviewsCSS from './Reviews.module.css';
import data from '../Reviews/FakeReviewData.js';

const axios = require('axios');

import IndividualReview from '../Reviews/IndividualReview.jsx';
import ReviewForm from '../Reviews/ReviewForm.jsx';

const Reviews = ({ productId }) => {
  const [reviewData, setReviewData] = useState(null);
  const [reviewSubData, setReviewSubData] = useState(null);
  const [reviewCount, setReviewCount] = useState(10);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/overview/${productId}`)
      .then(
        (response) => (
          setReviewData(response.data.reviews),
          setReviewSubData(response.data.reviews.slice(0, 10))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (reviewData !== null) {
      setReviewSubData(reviewData.slice(0, reviewCount));
    }
  }, [reviewCount]);

  //need to add id name for every div so its visible in inspect elements
  return (
    <div id='main' className={ReviewsCSS.main}>
      <ReviewForm productId={productId} />
      <div className={ReviewsCSS.reviewSection}>
        {reviewSubData !== null &&
          reviewSubData.map((review) => (
            <IndividualReview review={review} productId={productId} />
          ))}
      </div>
      <button
        id='show_btn'
        className={ReviewsCSS.show_btn}
        onClick={() => setReviewCount(reviewCount + 5)}
      >
        show more reviews
      </button>
    </div>
  );
};

export default Reviews;
