import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReviewFormCSS from './ReviewForm.module.css';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');

const ReviewForm = ({ productId }) => {
  const [reviewForm, setReviewForm] = useState(false);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    axios.get('/authenticate').then((results) => {
      if (results.data) {
        setUserName(results.data.username);
      }
    }, []);
  });

  const handleReviewTitle = (e) => setReviewTitle(e.target.value);
  const handleReviewBody = (e) => setReviewBody(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    var review = {
      reviewer: userName,
      body: reviewBody,
      title: reviewTitle,
    };
    if (userName !== null) {
      axios.post('/review', { review }, { params: { productId: productId } });
    } else {
      alert('Please login before adding a review');
    }
    setReviewForm(!reviewForm);
  };

  return (
    <div>
      <div className={ReviewFormCSS.header}>
        <span className={ReviewFormCSS.reviewTitle}>Reviews</span>
        <button
          id='addreview_btn'
          className={ReviewFormCSS.addreview_btn}
          onClick={() => setReviewForm(!reviewForm)}
        >
          add review
        </button>
      </div>
      {reviewForm === true && (
        <div className={ReviewFormCSS.reviewForm}>
          <span className={ReviewFormCSS.reviewFormRatings}>Review</span>
          <button
            className={ReviewFormCSS.close_btn}
            onClick={() => setReviewForm(!reviewForm)}
          >
            close
          </button>
          <form onSubmit={handleSubmit}>
            <div>
              <label className={ReviewFormCSS.reviewFormTitle}>Title</label>
              <input
                input='text'
                className={ReviewFormCSS.input_title}
                value={reviewTitle}
                onChange={handleReviewTitle}
              ></input>
            </div>
            <div>
              <label className={ReviewFormCSS.reviewFormBody}>Body</label>
              <input
                className={ReviewFormCSS.input_review}
                input='text'
                value={reviewBody}
                onChange={handleReviewBody}
              ></input>
            </div>
            <input
              id='submit_btn'
              className={ReviewFormCSS.submit_btn}
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
