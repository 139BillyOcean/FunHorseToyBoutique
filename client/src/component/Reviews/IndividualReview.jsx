import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './IndividualReview.styles.css';
import data from '../Reviews/FakeReviewData.js';
import Answers from '../Reviews/Answers.jsx';
import AnswerForm from '../Reviews/AnswerForm.jsx';

const IndividualReview = ({ review, productId }) => {
  const [answers, showAnswers] = useState(true);
  const [buttonString, setButtonString] = useState(null);

  useEffect(() => {
    if (answers === false) {
      setButtonString('Show');
    } else {
      setButtonString('Hide');
    }
  }, [answers]);

  return (
    <div className={styles.review}>
      <div className={styles.reviewer}>Reviewer: {review.reviewer}</div>
      {review.title === undefined ? (
        <span className={styles.reviewTitle}>Title: Untitled</span>
      ) : (
        <span className={styles.reviewTitle}>Title: {review.title}</span>
      )}
      <span className={styles.reviewDate}>Date: {review.date}</span>
      <div className={styles.reviewBody}>{review.body}</div>
      <div className={styles.reviewHelpful}>Helpfulness: {review.helpful}</div>
      <div>Answers</div>
      {answers === true && (
        <Answers
          answers={review.answers}
          questionId={review._id}
          productId={productId}
        />
      )}
      <AnswerForm
        answers={review.answers}
        questionId={review._id}
        productId={productId}
      />
      <button onClick={() => showAnswers(!answers)}>{buttonString}</button>
    </div>
  );
};

export default IndividualReview;
