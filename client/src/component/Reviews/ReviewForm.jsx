import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ReviewForm.styles.css';
const ReviewForm = () => {
  return (
    <div className={styles.reviewForm}>
      <div className={styles.title}>Create a Review</div>
      <div className={styles.reviewFormRatings}>Overall Rating</div>
      <div className={styles.reviewFormTitle}>Insert Review Title Here</div>
      <div className={styles.reviewFormBody}>Insert Review Body Text Here</div>
    </div>
  );
};

export default ReviewForm;
