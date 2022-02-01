import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './ReviewForm.styles.css';
const ReviewForm = () => {
  const [reviewForm, setReviewForm] = useState(false);
  return (
    <div>
      <button onClick={() => setReviewForm(!reviewForm)}>add review</button>
      {reviewForm === true && (
        <div className={styles.reviewForm}>
          <div className={styles.title}>Create a Review</div>
          <div className={styles.reviewFormRatings}>Overall Rating</div>
          <div className={styles.reviewFormTitle}>Insert Review Title Here</div>
          <div className={styles.reviewFormBody}>
            Insert Review Body Text Here
          </div>
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
