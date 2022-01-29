import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Reviews.styles.css';

const Reviews = () => {
  return (
    <div className={styles.review}>
      <div className={styles.reviewRatings}>stars ☆☆☆☆☆</div>
      <div className={styles.reviewTitle}>insert review title here</div>
      <div className={styles.reviewDate}>insert review date here</div>
      <div className={styles.reviewBody}>insert review body here</div>
      <div className={styles.reviewHelpful}>mark review helpful</div>
    </div>
  );
};

export default Reviews;
