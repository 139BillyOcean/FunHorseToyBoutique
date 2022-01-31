import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './IndividualReview.styles.css';
import data from '../Reviews/FakeReviewData.js';

const IndividualReview = ({ review }) => {
  console.log(review);
  return (
    <div className={styles.review}>
      <div className={styles.reviewRatings}>stars ☆☆☆☆☆</div>
      <div className={styles.reviewer}>Reviewer: {review.reviewer}</div>
      <span className={styles.reviewTitle}>Title: {review.title}</span>
      <span className={styles.reviewDate}>Date: {review.date}</span>
      <div className={styles.reviewBody}>{review.body}</div>
      <div className={styles.reviewHelpful}>Helpfulness: {review.helpful}</div>
    </div>
  );
};

export default IndividualReview;

/*
      {reviewData !== null && (
        <div className={styles.review}>
          <div className={styles.reviewRatings}>stars ☆☆☆☆☆</div>
          <div className={styles.reviewTitle}>insert review title here</div>
          <div className={styles.reviewDate}>insert review date here</div>
          <div className={styles.reviewBody}>insert review body here</div>
          <div className={styles.reviewHelpful}>mark review helpful</div>
        </div>
*/
