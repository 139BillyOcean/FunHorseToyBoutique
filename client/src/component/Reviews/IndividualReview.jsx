import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './IndividualReview.styles.css';
import data from '../Reviews/FakeReviewData.js';

const IndividualReview = () => {
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

export default IndividualReview;
