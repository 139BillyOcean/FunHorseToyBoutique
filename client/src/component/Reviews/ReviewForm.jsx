import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './ReviewForm.styles.css';
const ReviewForm = () => {
  const [reviewForm, setReviewForm] = useState(false);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [reviewStars, setReviewStars] = useState(0);

  const handleReviewTitle = (e) => setReviewTitle(e.target.value);
  const handleReviewBody = (e) => setReviewBody(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('submit function working');
  };

  return (
    <div>
      <button onClick={() => setReviewForm(!reviewForm)}>add review</button>
      {reviewForm === true && (
        <div className={styles.reviewForm}>
          <form onSubmit={handleSubmit}>
            <div>
              <span className={styles.reviewFormRatings}>Overall Rating</span>
            </div>
            <div>
              <label className={styles.reviewFormTitle}>Title</label>
              <input
                input='text'
                value={reviewTitle}
                onChange={handleReviewTitle}
              ></input>
            </div>
            <div>
              <label className={styles.reviewFormBody}>Review</label>
              <input
                input='text'
                value={reviewBody}
                onChange={handleReviewBody}
              ></input>
            </div>
            <input type='submit' value='Submit' />
          </form>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;

/*
import React, { useState } from 'react';

const AddReview = () => {
  const [reviewForm, setReviewForm] = useState(false);

  return (
    <div>
      <button onClick={() => setReviewForm(!reviewForm)}>add review</button>
    </div>
  );
};

export default AddReview;
*/
